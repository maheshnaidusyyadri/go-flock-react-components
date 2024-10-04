import React, { useState } from "react";
import {
  IonButton,
  IonItem,
  IonLabel,
  IonList,
  IonSpinner,
  IonToast,
} from "@ionic/react";
import { EventMediaProps, Media } from "@goflock/types";
import { MasonryPhotoAlbum, Photo } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import allPhotos from "./photos";
import StyledLink from "./StyledLink";
import SelectIcon from "./SelectIcon";
import Footer from "../Footer/Footer";

type SelectablePhoto = Photo & {
  selected?: boolean;
};

const EventMediaPresenter: React.FC<EventMediaProps> = ({
  eventId,
  media,
  addMedia,
  deleteMedia,
  showGallary,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [galleryPhotos, setGalleryPhotos] = useState(media);
  const [lightboxPhoto, setLightboxPhoto] = useState<SelectablePhoto>();

  const [photos, setPhotos] = useState<SelectablePhoto[]>(() =>
    allPhotos.map((photo) => ({
      ...photo,
      href: photo.src,
      label: "Open image in a lightbox",
    }))
  );

  // Handle adding media from the gallery
  const handleAddMedia = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const galleryItems = await showGallary();
      for (const item of galleryItems) {
        const addedMedia = await addMedia(item.webviewPath!);
        setGalleryPhotos((prevPhotos) => [...prevPhotos, addedMedia]);
      }
    } catch (err) {
      setError("Failed to add media");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle deleting media
  const handleDeleteMedia = async (mediaId: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await deleteMedia(mediaId);
      setGalleryPhotos((prevPhotos) =>
        prevPhotos.filter((photo) => photo.id !== mediaId)
      );
    } catch (err) {
      setError("Failed to delete media");
    } finally {
      setIsLoading(false);
    }
  };

  // // Prepare photos for the photo album
  // const photos = galleryPhotos.map((item) => ({
  //   src: item.downloadUrl || item.path,
  //   width: 300,
  //   height: 300,
  // }));

  return (
    <>
      <h2>Event Media</h2>

      <MasonryPhotoAlbum
        photos={photos}
        // targetRowHeight={150}
        // custom render functions
        render={{
          // render custom styled link
          link: (props) => <StyledLink {...props} />,
          // render image selection icon
          extras: (_, { photo: { selected }, index }) => (
            <SelectIcon
              selected={selected}
              onClick={(event) => {
                setPhotos((prevPhotos) => {
                  const newPhotos = [...prevPhotos];
                  newPhotos[index].selected = !selected;
                  return newPhotos;
                });

                // prevent the event from propagating to the parent link element
                event.preventDefault();
                event.stopPropagation();
              }}
            />
          ),
        }}
        // custom components' props
        componentsProps={{
          link: ({ photo: { href } }) =>
            // add target="_blank" and rel="noreferrer noopener" to external links
            href?.startsWith("http")
              ? { target: "_blank", rel: "noreferrer noopener" }
              : undefined,
        }}
        // on click callback
        onClick={({ event, photo }) => {
          // let a link open in a new tab / new window / download
          if (event.shiftKey || event.altKey || event.metaKey) return;

          // prevent the default link behavior
          event.preventDefault();

          // open photo in a lightbox
          setLightboxPhoto(photo);
        }}
        // describe photo album size in different viewports
        sizes={{
          size: "1168px",
          sizes: [
            { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
          ],
        }}
        // re-calculate the layout only at specific breakpoints
        breakpoints={[220, 360, 480, 600, 900, 1200]}
      />

      <Lightbox
        open={Boolean(lightboxPhoto)}
        close={() => setLightboxPhoto(undefined)}
        slides={photos}
        carousel={{ finite: true }}
        render={{ buttonPrev: () => null, buttonNext: () => null }}
        styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .8)" } }}
        controller={{
          closeOnBackdropClick: true,
          closeOnPullUp: true,
          closeOnPullDown: true,
        }}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />

      {isLoading && <IonSpinner name="crescent" />}

      {/* Media list with delete option */}
      <IonList>
        {galleryPhotos.map((item: Media) => (
          <IonItem key={item.id}>
            <IonLabel>{item.createdAt}</IonLabel>
            <IonButton
              onClick={() => handleDeleteMedia(item.id)}
              disabled={isLoading}
              color="danger"
            >
              Delete
            </IonButton>
          </IonItem>
        ))}
      </IonList>

      <button onClick={handleAddMedia}>Add Media</button>

      {/* Error Toast */}
      {error && (
        <IonToast
          isOpen={!!error}
          message={error}
          duration={2000}
          color="danger"
          onDidDismiss={() => setError(null)}
        />
      )}
      <Footer
        eventId={eventId}
        activeTab={"media"}
      />
    </>
  );
};

export default EventMediaPresenter;
