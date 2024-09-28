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
import { MasonryPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./photos";

const EventMediaPresenter: React.FC<EventMediaProps> = ({
  media,
  addMedia,
  deleteMedia,
  showGallary,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [galleryPhotos, setGalleryPhotos] = useState(media);
  const [index, setIndex] = useState(-1);

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

      {/* Display media gallery */}
      <MasonryPhotoAlbum
        photos={photos}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />

      <IonButton
        onClick={handleAddMedia}
        disabled={isLoading}
      >
        Add Media from Gallery
      </IonButton>

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
    </>
  );
};

export default EventMediaPresenter;
