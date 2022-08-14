import Data from './data';
import { ChangeEvent, AceManager } from './ace';
import {
  FileTreeManager,
  FileEntity,
  FolderFileEntity,
  InternalFileRef,
  InternalDoc,
  InternalFolder,
} from './files';
import State, { ScopeEventListener } from './state';
declare namespace Overleaf {
  export interface OverleafWindow extends Window {
    _ide: State;
    data: Data;
  }

  export { State };
  export { ScopeEventListener };
  export declare namespace Editor {
    type Manager = AceManager;
    export { Manager, ChangeEvent };
  }

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
