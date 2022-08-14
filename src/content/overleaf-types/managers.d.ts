namespace Overleaf {
  type FileRef = {
    _id: string;
    created: string;
    name: string;
    linkedFileData: null;
    rev: number;
    created: string;
  };

  type Doc = {
    _id: string;
    name: string;
  };

  type Folder = {
    _id: string;
    name: string;
    folders: Overleaf.Folder[];
    fileRefs: Overleaf.FileRef[];
    docs: Overleaf.Doc[];
  };

  type FileTreeEntity = {
    id: string;
    created: string;
    name: string;
    linkedFileData?: null;
    selected?: boolean;
    type: 'file' | 'doc' | 'folder';
    children?: FileTreeEntity[];
  };

  type FileTreeFolderEntity = FileTreeEntity & {
    type: 'folder';
    children: FileTreeEntity[];
  };

  type FileTreeManager = {
    selected_entity_id: string;
    getCurrentFolder: () => FileTreeFolderEntity;
    findEntityById: (id: string) => FileTreeEntity;
    _findParentFolder: (
      entity: FileTreeEntity
    ) => FileTreeFolderEntity | undefined;
    recalculateDocList: () => void;
  };
}
