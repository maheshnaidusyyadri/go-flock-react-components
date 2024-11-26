import React, { useEffect, useRef, useState } from "react";
import "./EventMediaPresenter.scss";
import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonImg,
  IonLabel,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonToast,
  IonToolbar,
  SegmentValue,
} from "@ionic/react";
import { EventMediaProps } from "@goflock/types";
import { MasonryPhotoAlbum, Photo } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

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
import NoMedia from "../../images/noMedia.svg";

//import { Share } from "@capacitor/share";
import { UserMediaMetadata } from "@goflock/types/src/models/media/UserMediaMetadata";
type SelectablePhoto = Photo & {
  id?: any;
  selected?: boolean;
  type?: String;
  metadata?: UserMediaMetadata;
};

const EventMediaPresenter: React.FC<EventMediaProps> = ({
  event,
  eventId,
  eventRelation,
  media,
  addMedia,
  deleteMedia,
}) => {
  //const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lightboxPhoto, setLightboxPhoto] = useState<SelectablePhoto>();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [selectedSegment, setSelectedTab] = useState<SegmentValue>("all");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
  const [photos, setPhotos] = useState<SelectablePhoto[]>([]);

  useEffect(() => {
    // Combine both filtering and additional properties in a single effect
    const filteredMedia = media
      ?.filter((photo: any) => {
        if (selectedSegment === "all") return true;
        if (selectedSegment === "photo")
          return photo.metadata.type.includes("image");
        if (selectedSegment === "video")
          return photo.metadata.type.includes("video");
        if (selectedSegment === "document")
          return photo.metadata.type.includes("document");
        return false;
      })
      .map((mediaItem: any) => ({
        ...mediaItem,
        src: mediaItem.downloadUrl,
        label: "Open image in a lightbox",
        width: mediaItem.metadata.width || 0,
        height: mediaItem.metadata.height || 0,
        ...(mediaItem.metadata.type.includes("video")
          ? {
              type: mediaItem.metadata.type.includes("video") ? "video" : "",
              sources: [
                {
                  src: mediaItem.downloadUrl,
                  type: mediaItem.metadata.type,
                },
              ],
              srcSet: breakpoints.map((breakpoint) => ({
                src: mediaItem.thumbnailUrl,
                width: breakpoint,
                height: Math.round(
                  (mediaItem.height / mediaItem.width) * breakpoint
                ),
              })),
            }
          : {
              type: mediaItem.type.includes("image") ? "image" : "",
              srcSet: breakpoints.map((breakpoint) => ({
                src: mediaItem.downloadUrl,
                width: breakpoint,
                height: Math.round(
                  (mediaItem.height / mediaItem.width) * breakpoint
                ),
              })),
            }),
      }));

    setPhotos(filteredMedia);
  }, [selectedSegment]);

  useEffect(() => {
    if (!media) {
      return;
    }

    console.log("using media");
    console.log(media);

    let results = media.map((photo: any) => ({
      ...photo,
      src: photo.downloadUrl,
      width: photo.metadata.width || 0,
      height: photo.metadata.height || 0,
      ...(photo.metadata.type.includes("video")
        ? {
            src: photo.downloadUrl,
            type: photo.metadata.type.includes("video") ? "video" : "",
            sources: [
              {
                src: photo.downloadUrl,
                type: photo.metadata.type,
              },
            ],
            srcSet: breakpoints.map((breakpoint) => ({
              src: photo.thumbnailUrl,
              width: breakpoint,
              height: Math.round((photo.height / photo.width) * breakpoint),
            })),
          }
        : {
            ...photo,
            ...{
              src: photo.downloadUrl,
              type: photo.type.includes("image") ? "image" : "",
              srcSet: breakpoints.map((breakpoint) => ({
                src: photo.downloadUrl,
                width: breakpoint,
                height: Math.round((photo.height / photo.width) * breakpoint),
              })),
            },
          }),
    }));

    console.log(results);

    setPhotos(results);
    const handleContextMenu = (event: any) => {
      event.preventDefault();
    };
    window.addEventListener("contextmenu", handleContextMenu);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [media]);

  useEffect(() => {
    const count = photos?.filter((photo) => photo.selected).length;
    setSelectedCount(count);
  }, [photos]);

  const areAllSelected = photos?.length > 0 && selectedCount === photos.length;
  const handleEditMode = () => {
    setIsEditMode(true);
  };

  const handleSelectAll = () => {
    setPhotos((prevPhotos: any) =>
      prevPhotos.map((photo: any) => ({ ...photo, selected: true }))
    );
  };

  const handleDeselectAll = () => {
    setPhotos((prevPhotos: any) =>
      prevPhotos.map((photo: any) => ({ ...photo, selected: false }))
    );
  };

  const handleDownloadSelected = () => {
    const selectedPhotos = photos.filter((photo) => photo.selected);
    selectedPhotos.forEach((photo: any) => {
      const link = document.createElement("a");
      // Determine the href based on the type
      link.href = photo.type === "image" ? photo.src : photo.sources?.[0]?.src;
      // Check if href is defined before proceeding
      if (!link.href) {
        console.error("File source is undefined for photo:", photo);
        return; // Skip to the next photo
      }
      // Determine the filename based on the type and extension
      let extension;
      if (photo.type === "image") {
        extension = photo.src ? photo.src.split(".").pop() : "jpg"; // Default to 'jpg' if src is undefined
        link.download = `downloaded_image.${extension}`; // Set the download filename with the extension
        console.log("extension-image", extension);
      } else if (photo.type === "video") {
        extension = photo.sources?.[0]?.src
          ? photo.sources[0].src.split(".").pop()
          : "mp4"; // Default to 'mp4' if src is undefined
        console.log("extension-videos", extension);
        link.download = `downloaded_video.${extension}`; // Set the download filename with the extracted extension
      }
      // Debugging logs
      console.log(`Attempting to download: ${link.href}`);
      // Check if the file exists before downloading
      fetch(link.href)
        .then((response) => {
          if (response.ok) {
            return response.blob(); // Convert to blob
          } else {
            console.error(`File not available: ${link.href}`);
            throw new Error("File not available");
          }
        })
        .then((blob) => {
          const url = URL.createObjectURL(blob); // Create a Blob URL
          link.href = url; // Set the href to the Blob URL
          document.body.appendChild(link);
          link.click(); // Trigger the download
          document.body.removeChild(link); // Clean up the DOM
          URL.revokeObjectURL(url); // Clean up the Blob URL
        })
        .catch((error) => {
          console.error(`Error downloading file: ${error.message}`);
        });
    });
  };
  const handleDeleteSelected = async () => {
    const mediaIds = photos
      .filter((filterItem) => filterItem.selected)
      .map((mediaItem) => mediaItem.id);
    console.log("mediaIds-mediaIds", mediaIds);
    await deleteMedia(mediaIds);
    setPhotos((prevPhotos) => {
      // Filter out the selected photos
      return prevPhotos.filter((photo) => !photo.selected);
    });
    // Optionally, you might want to reset the selection count and edit mode
    setIsEditMode(false);
    setSelectedCount(0);
  };

  // @ts-ignore
  const handleShareSelected = async () => {
    console.log("handleShareSelected");
    try {
      const selectedPhotos = photos.filter((photo) => photo.selected);
      console.log("selectedPhotos", selectedPhotos);
      if (selectedPhotos.length === 0) {
        alert("No images selected to share.");
        return;
      }

      const files = await Promise.all(
        selectedPhotos.map(async (photo) => {
          const response = await fetch(photo.src);
          console.log("selectedItem", photo);
          if (!response.ok)
            throw new Error(`Failed to fetch image: ${photo.src}`);
          const blob = await response.blob();
          return new File([blob], photo?.metadata?.name || "", {
            type: blob.type,
          });
        })
      );

      console.log("Files to share:", files);

      // await Share.share({
      //   title: "Share",
      //   text: "Check out these!",
      //   files,
      // });
      if (navigator.canShare && navigator.canShare({ files })) {
        await navigator.share({
          title: "Share",
          text: "Check out these!",
          files,
        });
      } else {
        alert("File sharing is not supported on this platform.");
      }
    } catch (error) {
      console.error("Error sharing images:", error);
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: FileList | null = event.target.files;
    if (!files || files.length === 0) {
      console.log("No files selected");
      return;
    }

    // Call addMedia with arrays of base64 strings and metadata
    await addMedia(files);
  };

  return (
    <IonPage>
      <Header
        eventId={eventId}
        showMenu={false}
        showContactList={false}
        title={"Media"}
        showProfile={true}
      />
      <IonContent className="ion-padding eventMedia1">
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
              <IonLabel className="select_action" onClick={handleSelectAll}>
                Select All
              </IonLabel>
            )}
            {selectedCount > 0 && areAllSelected && (
              <IonLabel className="select_action" onClick={handleDeselectAll}>
                Deselect All
              </IonLabel>
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
          {photos && photos.length > 0 ? (
            <div onContextMenu={handleEditMode}>
              <MasonryPhotoAlbum
                photos={photos}
                // @ts-ignore
                render={{
                  // render custom styled link
                  link: (props) => (
                    <StyledLink {...props} isEditView={isEditMode} />
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
                          <IonImg class="type_declaration" src={VideoType} />
                        </>
                      )}
                      {type == "image" && (
                        <>
                          <IonImg class="type_declaration" src={ImageType} />
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
          ) : (
            <IonImg src={NoMedia} />
          )}
        </IonGrid>
        <Lightbox
          open={Boolean(lightboxPhoto)}
          close={() => setLightboxPhoto(undefined)}
          // @ts-ignore
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

        {/* {isLoading && <IonSpinner name="crescent" />} */}
        {/* Hidden file input for image upload */}
        <input
          multiple
          type="file"
          accept="image/*"
          style={{ display: "none" }} // Hide the file input
          ref={fileInputRef} // Assign ref to the file input
          onChange={handleFileChange} // Handle file change
        />
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
      </IonContent>
      <IonFooter className="stickyFooter">
        <IonButton
          className="primary-btn rounded"
          onClick={() => fileInputRef.current?.click()}
        >
          Add Media
        </IonButton>
      </IonFooter>
      {isEditMode ? (
        <>
          <IonFooter className="footer">
            <IonToolbar>
              <IonGrid className="ion-padding footer-cnt">
                <IonRow>
                  <IonCol
                    className="ion-no-padding"
                    onClick={handleShareSelected}
                  >
                    <img src={ShareIcon} alt="Share" />
                  </IonCol>
                  <IonCol
                    className="ion-no-padding"
                    onClick={handleDownloadSelected}
                  >
                    <img src={Download} alt="Split Bill" />
                  </IonCol>
                  <IonCol className="ion-no-padding">
                    <img src={save} alt="save" />
                  </IonCol>
                  <IonCol
                    className="ion-no-padding"
                    onClick={handleDeleteSelected}
                  >
                    <img src={Delete} alt="Delete" />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonToolbar>
          </IonFooter>
        </>
      ) : (
        <Footer
          activeTab={"media"}
          eventId={eventId}
          settings={event.settings}
          eventRelation={eventRelation}
        />
      )}
    </IonPage>
  );
};

export default EventMediaPresenter;
