import Data from './data';
import {
  FileTreeManager,
  FileEntity,
  FolderFileEntity,
  InternalFileRef,
  InternalDoc,
  InternalFolder,
} from './managers';
import State from './state';
declare namespace Overleaf {
  export interface OverleafWindow extends Window {
    _ide: State;
    data: Data;
  }

  export { State };

  export declare namespace File {
    type Manager = FileTreeManager;
    export { Manager };

    export { FileEntity, FolderFileEntity };

    export declare namespace Internal {
      export {
        InternalFileRef as FileRef,
        InternalDoc as Doc,
        InternalFolder as Folder,
      };
    }
  }
}
