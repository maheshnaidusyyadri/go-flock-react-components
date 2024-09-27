import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonSpinner,
  IonToast,
} from "@ionic/react";
import { EventMediaProps, Media } from "@goflock/types/src/index";
import { UserGallaryItem } from "@goflock/types/src/index";
import { MasonryPhotoAlbum, RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
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
  const [selectedPhotos, setSelectedPhotos] = useState<UserGallaryItem[]>([]);
  const [index, setIndex] = useState(-1);

  // Handle adding media by selecting photos from the gallery
  const handleAddMedia = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const galleryItems = await showGallary();
      setSelectedPhotos(galleryItems);

      // Upload each selected image
      for (const item of galleryItems) {
        await addMedia(item.webviewPath!);
      }
    } catch (err) {
      setError("Failed to add media");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteMedia = async (mediaId: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await deleteMedia(mediaId);
    } catch (err) {
      setError("Failed to delete media");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IonContent>
      <h2>Event Media</h2>

      {/* Display media using react-photo-album */}
      <>
        <MasonryPhotoAlbum
          photos={photos}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </>
      <IonButton
        onClick={handleAddMedia}
        disabled={isLoading}
      >
        Add Media from Gallery
      </IonButton>

      {isLoading && <IonSpinner name="crescent" />}

      {/* Media Delete Option */}
      <IonList>
        {media.map((item: Media) => (
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

      {/* Display errors if any */}
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
  );
};

export default EventMediaPresenter;
