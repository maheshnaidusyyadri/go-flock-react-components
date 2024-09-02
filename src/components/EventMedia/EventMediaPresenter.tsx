import React, { useState } from "react";
import { EventMediaProps, Media } from "@goflock/types";

const EventMediaPresenter: React.FC<EventMediaProps> = ({
  media,
  addMedia,
  deleteMedia,
}) => {
  const [newImage, setNewImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddMedia = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await addMedia(newImage);
      setNewImage("");
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
    <div>
      <h2>Event Media</h2>
      <ul>
        {media.map((item: Media) => (
          <li key={item.id}>
            <img
              src={item.path}
              alt={item.id}
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
            <p>{item.createdAt}</p>
            <button
              onClick={() => handleDeleteMedia(item.id)}
              disabled={isLoading}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Enter image URL"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        />
        <button
          onClick={handleAddMedia}
          disabled={isLoading || !newImage}
        >
          Add Media
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default EventMediaPresenter;
