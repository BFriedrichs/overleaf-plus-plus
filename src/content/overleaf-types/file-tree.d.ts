type OverleafFileRef = {
  _id: string;
  name: string;
  linkedFileData: object;
  created: string;
};

type OverleafDoc = {
  _id: string;
  name: string;
};

type OverleafFolder = {
  _id: string;
  name: string;
  folders: OverleafFolder[];
  fileRefs: OverleafShareJSFileRef[];
  docs: OverleafShareJSDoc[];
};
