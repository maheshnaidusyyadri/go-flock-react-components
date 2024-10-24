import React, { useEffect, useState } from "react";
import "./EventMediaPresenter.scss";
import {
  IonButton,
  IonContent,
  IonFooter,
  IonGrid,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonSegment,
  IonSegmentButton,
  IonSpinner,
  IonToast,
  SegmentValue,
} from "@ionic/react";
import { EventMediaProps, Media } from "@goflock/types";
import { MasonryPhotoAlbum, Photo } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import allPhotos from "./photos";
import StyledLink from "./StyledLink";
import SelectIcon from "./SelectIcon";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import GridIcon from "../../images/icons/all.svg";
import PhotoIcon from "../../images/icons/photos.svg";
import VideoIcon from "../../images/icons/videos.svg";
import VideoType from "../../images/icons/videoType.svg";
import ImageType from "../../images/icons/imageType.svg";
import DocumentsIcon from "../../images/icons/documents.svg";
import { Video } from "yet-another-react-lightbox/plugins";

import ShareIcon from "../../images/icons/Share.svg";
import Download from "../../images/icons/Download.svg";
import save from "../../images/icons/Love.svg";
import Delete from "../../images/icons/Delet.svg";
import CrossIcon from "../../images/icons/Cross.svg";

type SelectablePhoto = Photo & {
  selected?: boolean;
  type?: String;
};

const EventMediaPresenter: React.FC<EventMediaProps> = ({
  media,
  addMedia,
  deleteMedia,
  showGallary,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [galleryPhotos, setGalleryPhotos] = useState(media);
  const [lightboxPhoto, setLightboxPhoto] = useState<SelectablePhoto>();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [selectedSegment, setSelectedTab] = useState<SegmentValue>("all");

  const [photos, setPhotos] = useState<SelectablePhoto[]>(() =>
    allPhotos.map((photo) => ({
      ...photo,
      href: photo.src,
      label: "Open image in a lightbox",
    }))
  );
  useEffect(() => {
    const count = photos.filter((photo) => photo.selected).length;
    setSelectedCount(count);
  }, [photos]);
  // useEffect(() => {
  //   console.log("photos-photos", allPhotos);
  // }, []);
  useEffect(() => {
    if (selectedSegment === "all") {
      setPhotos(allPhotos);
    } else if (selectedSegment === "photo") {
      setPhotos(allPhotos.filter((photo: any) => photo.type === "image"));
    } else if (selectedSegment === "video") {
      setPhotos(allPhotos.filter((photo: any) => photo.type === "video"));
    } else if (selectedSegment === "document") {
      setPhotos(allPhotos.filter((photo: any) => photo.type === "document"));
    }
  }, [selectedSegment]);
  useEffect(() => {
    const handleContextMenu = (event: any) => {
      event.preventDefault();
    };

    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  const areAllSelected = photos.length > 0 && selectedCount === photos.length;
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
  const handleEditMode = () => {
    console.log("handleEditMode");
    setIsEditMode(true);
  };
  const handleSelectAll = () => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) => ({ ...photo, selected: true }))
    );
  };

  const handleDeselectAll = () => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) => ({ ...photo, selected: false }))
    );
  };

  return (
    <>
      <IonContent className="eventMedia">
        <Header
          showMenu={false}
          showContactList={false}
          title={"Media"}
          showProfile={true}
        />
        {/* <h2>Event Media</h2> */}
        {isEditMode && (
          <IonLabel class="slection_head">
            {isEditMode && (
              <IonLabel
                className="slection_count"
                onClick={() => {
                  handleDeselectAll();
                  setIsEditMode(false);
                }}
              >
                <IonImg src={CrossIcon} />
                {selectedCount > 0
                  ? selectedCount + " item selected"
                  : "Select item"}
              </IonLabel>
            )}
            {selectedCount > 0 && !areAllSelected && (
              <IonLabel onClick={handleSelectAll}>Select All</IonLabel>
            )}
            {selectedCount > 0 && areAllSelected && (
              <IonLabel onClick={handleDeselectAll}>Deselect All</IonLabel>
            )}
          </IonLabel>
        )}
        <IonGrid class="media_cnt">
          <IonSegment
            className="gallery_tabs"
            value={selectedSegment}
            onIonChange={(e) => setSelectedTab(e.detail.value!)}
          >
            <IonSegmentButton value="all">
              <IonImg src={GridIcon} />
            </IonSegmentButton>
            <IonSegmentButton value="photo">
              <IonImg src={PhotoIcon} />
            </IonSegmentButton>
            <IonSegmentButton value="video">
              <IonImg src={VideoIcon} />
            </IonSegmentButton>
            <IonSegmentButton value="document">
              <IonImg src={DocumentsIcon} />
            </IonSegmentButton>
          </IonSegment>
          <div onContextMenu={handleEditMode}>
            <MasonryPhotoAlbum
              photos={photos}
              // targetRowHeight={150}
              // custom render functions
              render={{
                // render custom styled link
                link: (props) => (
                  <StyledLink
                    {...props}
                    isEditView={isEditMode}
                  />
                ),
                // render image selection icon
                extras: (_, { photo: { selected, type }, index }) => (
                  <>
                    {isEditMode && (
                      <SelectIcon
                        selected={!selected}
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
                    )}
                    {type == "video" && (
                      <>
                        <IonImg
                          class="type_declaration"
                          src={VideoType}
                        />
                      </>
                    )}
                    {type == "image" && (
                      <>
                        <IonImg
                          class="type_declaration"
                          src={ImageType}
                        />
                      </>
                    )}
                  </>
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
              onClick={({ event, photo, index }) => {
                setLightboxIndex(index);
                if (!isEditMode) {
                  // let a link open in a new tab / new window / download
                  if (event.shiftKey || event.altKey || event.metaKey) return;
                  // prevent the default link behavior
                  event.preventDefault();
                  // open photo in a lightbox
                  setLightboxPhoto(photo);
                } else {
                  setPhotos((prevPhotos) => {
                    const newPhotos = [...prevPhotos];
                    newPhotos[index].selected = !newPhotos[index].selected;
                    return newPhotos;
                  });
                }
              }}
              // describe photo album size in different viewports
              sizes={{
                size: "1168px",
                sizes: [
                  {
                    viewport: "(max-width: 1200px)",
                    size: "calc(100vw - 32px)",
                  },
                ],
              }}
              // re-calculate the layout only at specific breakpoints
              breakpoints={[220, 360, 480, 600, 900, 1200]}
            />
          </div>
        </IonGrid>
        <Lightbox
          open={Boolean(lightboxPhoto)}
          close={() => setLightboxPhoto(undefined)}
          slides={photos}
          carousel={{ finite: true }}
          render={{ buttonPrev: () => null, buttonNext: () => null }}
          styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .8)" } }}
          controller={{
            closeOnBackdropClick: false,
            closeOnPullUp: false,
            closeOnPullDown: false,
          }}
          plugins={[Fullscreen, Slideshow, Zoom, Video]}
          index={lightboxIndex}
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

        <IonFooter className="stickyFooter hasFooter">
          <IonButton
            className="primary-btn rounded"
            onClick={handleAddMedia}
          >
            Add Media
          </IonButton>
        </IonFooter>
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
        {isEditMode ? (
          <IonFooter className="main-footer">
            <nav>
              <ul>
                <li>
                  <StyledLink
                    className="link"
                    href="#"
                  >
                    <img
                      src={ShareIcon}
                      alt="Media"
                    />
                    <span>Share</span>
                  </StyledLink>
                </li>
                <li>
                  <StyledLink
                    className="link"
                    href="#"
                  >
                    <img
                      src={Download}
                      alt="Split Bill"
                    />
                    <span>Download</span>
                  </StyledLink>
                </li>
                <li>
                  <StyledLink
                    className="link"
                    href="#"
                  >
                    <img
                      src={save}
                      alt="Chat"
                    />
                    <span>Save</span>
                  </StyledLink>
                </li>
                <li>
                  <StyledLink
                    className="link"
                    href="#"
                  >
                    <img
                      src={Delete}
                      alt="Settings"
                    />
                    <span>Delete</span>
                  </StyledLink>
                </li>
              </ul>
            </nav>
          </IonFooter>
        ) : (
          <Footer
            activeTab={"home"}
            eventId={""}
          />
        )}
      </IonContent>
    </>
  );
};

export default EventMediaPresenter;
