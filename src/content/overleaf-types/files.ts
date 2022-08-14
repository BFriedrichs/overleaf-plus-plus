export type InternalFileRef = {
  _id: string;
  created: string;
  name: string;
  linkedFileData: null;
  rev: number;
};

export type InternalDoc = {
  _id: string;
  name: string;
};

export type InternalFolder = {
  _id: string;
  name: string;
  folders: InternalFolder[];
  fileRefs: InternalFileRef[];
  docs: InternalDoc[];
};

export type FileEntity = {
  id: string;
  created: string;
  name: string;
  linkedFileData?: null;
  selected?: boolean;
  type: 'file' | 'doc' | 'folder';
  children?: FileEntity[];
};

export type FolderFileEntity = FileEntity & {
  type: 'folder';
  children: FileEntity[];
};

export type FileTreeManager = {
  selected_entity_id: string;
  getCurrentFolder: () => FolderFileEntity;
  findEntityById: (id: string) => FileEntity;
  findEntityByPath: (path: string) => FileEntity;
  _findParentFolder: (entity: FileEntity) => FolderFileEntity | undefined;
  recalculateDocList: () => void;
};
