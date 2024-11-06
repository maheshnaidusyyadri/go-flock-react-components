import { Photo } from 'react-photo-album';
declare const photos: (Photo | {
    src: string;
    alt: string;
    width: number;
    height: number;
    type: string;
    sources: {
        src: string | undefined;
        type: string;
    }[];
    srcSet: {
        src: string;
        width: number;
        height: number;
    }[];
})[];
export default photos;
