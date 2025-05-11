export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};
export const dummyCards = [
  {
    id:"1",
    title:"Snapchat Leaks",
    thumbnail:"/hall/Eva/eva-3.png",
    userImg : "/hall/Eva/eva-9.png",
    username : "Eva Elfie",
    createdAt : new Date("2025-04-21"),
    views:69,
    visibility:"public",
    duration:180
  },
  {
    id:"2",
    title:"Twitter Leaks",
    thumbnail:"/hall/Eva/eva-7.png",
    userImg : "/hall/Eva/eva-9.png",
    username : "Eva Elfie",
    createdAt : new Date("2025-04-21"),
    views:69,
    visibility:"public",
    duration:180
  },
  {
    id:"3",
    title:"Eva Sucking Skills",
    thumbnail:"/hall/Eva/eva-1.gif",
    userImg : "/hall/Eva/eva-9.png",
    username : "Eva Elfie",
    createdAt : new Date("2025-04-21"),
    views:69,
    visibility:"public",
    duration:180
  },
  {
    id:"4",
    title:"Ana Infamous Bath Scene",
    thumbnail:"/hall/ana/ana-3.gif",
    userImg : "/hall/ana/ana-7.png",
    username : "Eva Elfie",
    createdAt : new Date("2023-07-18"),
    views:69,
    visibility:"public",
    duration:180
  },
  {
    id:"5",
    title:"Ana owning the car shoot",
    thumbnail:"/hall/ana/ana-1.png",
    userImg : "/hall/ana/ana-7.png",
    username : "Eva Elfie",
    createdAt : new Date("2025-04-21"),
    views:69,
    visibility:"public",
    duration:180
  },
  {
    id:"6",
    title:"Ana Being Ridiculous Hot",
    thumbnail:"/hall/ana/ana-10.png",
    userImg : "/hall/ana/ana-7.png",
    username : "Eva Elfie",
    createdAt : new Date("2025-04-21"),
    views:69,
    visibility:"public",
    duration:180
  },
  {
    id:"7",
    title:"Sydney Leaks",
    thumbnail:"/hall/sydney/sydney-1.gif",
    userImg : "/hall/sydney/sydney-2.png",
    username : "Eva Elfie",
    createdAt : new Date("2025-04-21"),
    views:69,
    visibility:"public",
    duration:180
  },
  {
    id:"8",
    title:"Sydney Crushing All",
    thumbnail:"/hall/sydney/sydney-9.png",
    userImg : "/hall/sydney/sydney-2.png",
    username : "Eva Elfie",
    createdAt : new Date("8/31/2014"),
    views:69,
    visibility:"public",
    duration:180
  },
  {
    id:"9",
    title:"Sydney being Naked",
    thumbnail:"/hall/sydney/sydney-7.png",
    userImg : "/hall/sydney/sydney-2.png",
    username : "Eva Elfie",
    createdAt : new Date("4/17/2019"),
    views:69,
    visibility:"public",
    duration:180
  }
]

export const onlyAna = [
  {
    id:"4",
    title:"Ana Infamous Bath Scene",
    thumbnail:"/hall/ana/ana-3.gif",
    userImg : "/hall/ana/ana-7.png",
    username : "Eva Elfie",
    createdAt : new Date("2/14/2025"),
    views:69,
    visibility:"public",
    duration:20
  },
  {
    id:"5",
    title:"Ana owning the car shoot",
    thumbnail:"/hall/ana/ana-1.png",
    userImg : "/hall/ana/ana-7.png",
    username : "Eva Elfie",
    createdAt : new Date("2025-04-21"),
    views:69,
    visibility:"public",
    duration:69
  },
  {
    id:"6",
    title:"Ana Being Ridiculous Hot",
    thumbnail:"/hall/ana/ana-10.png",
    userImg : "/hall/ana/ana-7.png",
    username : "Eva Elfie",
    createdAt : new Date("5/6/2004"),
    views:69,
    visibility:"public",
    duration:180
  },
]
