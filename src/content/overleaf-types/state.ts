import { AceManager } from './ace';
import { FolderFileEntity, FileTreeManager, InternalFolder } from './files';

type State = {
  $scope: {
    state: {
      loading: boolean;
      load_progress: number;
      error: object;
    };
    ui: {
      leftMenuShown: boolean;
      view: string;
      chatOpen: boolean;
      pdfLayout: string;
      pdfHidden: boolean;
      pdfWidth: number;
      reviewPanelOpen: object;
      miniReviewPanelVisible: boolean;
      chatResizerSizeOpen: number;
      chatResizerSizeClosed: number;
    };
    user: {
      id: string;
      email: string;
      first_name: string;
      last_name: string;
      referal_id: string;
      signUpDate: string;
      allowedFreeTrial: boolean;
      features: {
        collaborators: number;
        versioning: boolean;
        dropbox: boolean;
        github: boolean;
        gitBridge: boolean;
        compileTimeout: number;
        compileGroup: string;
        templates: boolean;
        references: boolean;
        trackChanges: boolean;
      };
      refProviders: { mendeley: boolean; zotero: boolean };
      alphaProgram: boolean;
      betaProgram: boolean;
      isAdmin: boolean;
    };
    settings: {
      mode: string;
      editorTheme: string;
      fontSize: number;
      autoComplete: boolean;
      autoPairDelimiters: boolean;
      pdfViewer: string;
      syntaxValidation: boolean;
      fontFamily: string;
      lineHeight: string;
      overallTheme: string;
    };
    anonymous: boolean;
    isTokenMember: boolean;
    isRestrictedTokenMember: boolean;
    cobranding: {
      isProjectCobranded: boolean;
      logoImgUrl: undefined;
      submitBtnHtml: undefined;
      brandVariationName: undefined;
      brandVariationHomeUrl: undefined;
    };
    chat: Record<string, unknown>;
    toggleReviewPanel: () => Record<string, unknown>;
    trackHover: () => Record<string, unknown>;
    project_id: string;
    connection: {
      debug: object;
      reconnecting: boolean;
      stillReconnecting: boolean;
      forced_disconnect: boolean;
      inactive_disconnect: boolean;
      jobId: number;
      state: string;
      joining: boolean;
      reconnection_countdown: object;
    };
    tryReconnectNow: () => Record<string, unknown>;
    multiSelectedCount: number;
    editor: {
      sharejs_doc: {
        doc_id: string;
        connected: boolean;
        joined: boolean;
        wantToBeJoined: boolean;
        _checkAceConsistency: () => Record<string, unknown>;
        _checkCMConsistency: () => Record<string, unknown>;
        _unsubscribeReconnectHandler: () => Record<string, unknown>;
        _onUpdateAppliedHandler: () => Record<string, unknown>;
        _onErrorHandler: () => Record<string, unknown>;
        _onDisconnectHandler: () => Record<string, unknown>;
        doc: {
          doc_id: string;
          type: string;
          track_changes: boolean;
          connection: {
            send: () => Record<string, unknown>;
            state: string;
            id: string;
          };
          _doc: {
            flush: () => Record<string, unknown>;
            setFlushDelay: () => Record<string, unknown>;
            shout: () => Record<string, unknown>;
            name: string;
            version: number;
            snapshot: string;
            type: {
              name: string;
              create: () => Record<string, unknown>;
              apply: () => Record<string, unknown>;
              _append: () => Record<string, unknown>;
              compose: () => Record<string, unknown>;
              compress: () => Record<string, unknown>;
              normalize: () => Record<string, unknown>;
              transformCursor: () => Record<string, unknown>;
              _tc: () => Record<string, unknown>;
              invert: () => Record<string, unknown>;
              transformX: () => Record<string, unknown>;
              transform: () => Record<string, unknown>;
              api: {
                provides: { text: boolean };
                getLength: () => Record<string, unknown>;
                getText: () => Record<string, unknown>;
                insert: () => Record<string, unknown>;
                del: () => Record<string, unknown>;
                _register: () => Record<string, unknown>;
              };
            };
            getLength: () => Record<string, unknown>;
            getText: () => Record<string, unknown>;
            insert: () => Record<string, unknown>;
            del: () => Record<string, unknown>;
            _register: () => Record<string, unknown>;
            _events: {
              remoteop: [
                () => Record<string, unknown>,
                () => Record<string, unknown>
              ];
              change: [() => Record<string, unknown>];
              acknowledge: [() => Record<string, unknown>];
              flipped_pending_to_inflight: [() => Record<string, unknown>];
              saved: [() => Record<string, unknown>];
              error: [() => Record<string, unknown>];
              insert: [() => Record<string, unknown>];
              delete: [() => Record<string, unknown>];
            };
            state: string;
            autoOpen: boolean;
            _create: boolean;
            inflightOp: object;
            inflightCallbacks: [];
            inflightSubmittedIds: [];
            pendingOp: object;
            pendingCallbacks: [];
            serverOps: Record<string, unknown>;
            _flushDelay: number;
            submitOp: () => Record<string, unknown>;
            created: boolean;
            flushTimeout: object;
            detach_ace: () => Record<string, unknown>;
          };
          EditorWatchdogManager: {
            scope: string;
            timeout: number;
            lastAck: object;
            lastUnackedEdit: object;
          };
          events: {
            error: [
              {
                callback: () => Record<string, unknown>;
                namespace: undefined;
              }
            ];
            externalUpdate: [
              {
                callback: () => Record<string, unknown>;
                namespace: undefined;
              }
            ];
            remoteop: [
              {
                callback: () => Record<string, unknown>;
                namespace: undefined;
              }
            ];
            'op:sent': [
              {
                callback: () => Record<string, unknown>;
                namespace: undefined;
              }
            ];
            'op:acknowledged': [
              {
                callback: () => Record<string, unknown>;
                namespace: undefined;
              }
            ];
            'op:timeout': [
              {
                callback: () => Record<string, unknown>;
                namespace: undefined;
              }
            ];
            flush: [
              {
                callback: () => Record<string, unknown>;
                namespace: undefined;
              }
            ];
            change: [
              {
                callback: () => Record<string, unknown>;
                namespace: undefined;
              }
            ];
            flipped_pending_to_inflight: [
              {
                callback: () => Record<string, unknown>;
                namespace: undefined;
              }
            ];
            saved: [
              {
                callback: () => Record<string, unknown>;
                namespace: undefined;
              }
            ];
          };
          track_changes_id_seeds: {
            pending: string;
            inflight: string;
          };
          _detachEditorWatchdogManager: () => Record<string, unknown>;
        };
        ranges: {
          changes: [];
          comments: [];
          id_seed: string;
          id_increment: number;
          _dirtyState: {
            comment: {
              moved: Record<string, unknown>;
              removed: Record<string, unknown>;
              added: Record<string, unknown>;
            };
            change: {
              moved: Record<string, unknown>;
              removed: Record<string, unknown>;
              added: Record<string, unknown>;
            };
          };
          resolvedThreadIds: Record<string, unknown>;
        };
        events: {
          error: [
            {
              callback: () => Record<string, unknown>;
              namespace: undefined;
            }
          ];
          externalUpdate: [
            {
              callback: () => Record<string, unknown>;
              namespace: undefined;
            }
          ];
          flipped_pending_to_inflight: [
            {
              callback: () => Record<string, unknown>;
              namespace: undefined;
            }
          ];
          'ranges:dirty': [
            {
              callback: () => Record<string, unknown>;
              namespace: undefined;
            }
          ];
          'ranges:clear': [
            {
              callback: () => Record<string, unknown>;
              namespace: undefined;
            }
          ];
          'ranges:redraw': [
            {
              callback: () => Record<string, unknown>;
              namespace: undefined;
            }
          ];
        };
        track_changes_as: object;
        ace: AceManager;
        oldInflightOp: object;
      };
      open_doc_id: string;
      open_doc_name: string;
      opening: boolean;
      trackChanges: boolean;
      wantTrackChanges: boolean;
      showRichText: boolean;
      showSymbolPalette: boolean;
      toggleSymbolPalette: () => Record<string, unknown>;
      insertSymbol: () => Record<string, unknown>;
    };
    onlineUsers: Record<string, unknown>;
    onlineUserCursorHighlights: Record<string, unknown>;
    onlineUsersArray: [];
    onlineUsersCount: number;
    getHueForUserId: () => Record<string, unknown>;
    history: {
      updates: [];
      nextBeforeTimestamp: object;
      atEnd: boolean;
      selection: {
        updates: [];
        doc: object;
        range: {
          fromV: object;
          toV: object;
          start_ts: object;
          end_ts: object;
        };
      };
      diff: object;
    };
    toggleHistory: () => Record<string, unknown>;
    pdf: {
      url: string;
      error: boolean;
      timeout: boolean;
      failure: boolean;
      compiling: boolean;
      uncompiled: boolean;
      logEntries: {
        all: [];
        errors: [];
        warnings: [];
        typesetting: [];
      };
      logEntryAnnotations: Record<string, unknown>;
      rawLog: string;
      validation: Record<string, unknown>;
      view: string;
      showRawLog: boolean;
      highlights: [];
      position: object;
      lastCompileTimestamp: number;
      clearingCache: boolean;
      isAutoCompileOnLoad: boolean;
      timedout: boolean;
      updateConsumedBandwidth: () => Record<string, unknown>;
      firstRenderDone: () => Record<string, unknown>;
      clsiMaintenance: boolean;
      tooRecentlyCompiled: boolean;
      renderingError: boolean;
      projectTooLarge: boolean;
      compileTerminated: boolean;
      compileExited: boolean;
      failedCheck: boolean;
      compileInProgress: boolean;
      autoCompileDisabled: boolean;
      downloadUrl: string;
      outputFiles: [
        {
          name: string;
          url: string;
          main: boolean;
          fileName: string;
          type: string;
        },
        {
          name: string;
          url: string;
          main: boolean;
          fileName: string;
          type: string;
        },
        {
          name: string;
          url: string;
          main: boolean;
          fileName: string;
          type: string;
        },
        {
          name: string;
          url: string;
          main: boolean;
          fileName: string;
          type: string;
        },
        {
          name: string;
          url: string;
          main: boolean;
          fileName: string;
          type: string;
        },
        {
          name: string;
          url: string;
          main: boolean;
          fileName: string;
          type: string;
        },
        {
          name: string;
          url: string;
          main: boolean;
          fileName: string;
          type: string;
        }
      ];
    };
    permissions: {
      read: boolean;
      write: boolean;
      admin: boolean;
      comment: boolean;
    };
    darkTheme: boolean;
    switchToFlatLayout: () => Record<string, unknown>;
    switchToSideBySideLayout: () => Record<string, unknown>;
    recompile: () => Record<string, unknown>;
    recompileViaKey: () => Record<string, unknown>;
    protocolVersion: number;
    project: {
      rootDoc_id: string;
      _id: string;
      name: string;
      rootFolder: [InternalFolder];
      publicAccesLevel: string;
      dropboxEnabled: boolean;
      compiler: string;
      description: string;
      spellCheckLanguage: string;
      deletedByExternalDataSource: boolean;
      deletedDocs: [];
      members: [];
      invites: [];
      imageName: string;
      owner: {
        _id: string;
        first_name: string;
        last_name: string;
        email: string;
        privileges: string;
        signUpDate: string;
      };
      features: {
        trackChanges: boolean;
        references: boolean;
        templates: boolean;
        compileGroup: string;
        compileTimeout: number;
        dropbox: boolean;
        versioning: boolean;
        collaborators: number;
        gitBridge: boolean;
        github: boolean;
        referencesSearch: boolean;
        mendeley: boolean;
        trackChangesVisible: boolean;
      };
      trackChangesState: boolean;
    };
    permissionsLevel: string;
    rootFolder: FolderFileEntity;
    deletedDocs: [];
    docs: [{ path: string }];
    currentPosition: { row: number; column: number };
  };
  $apply: (apply: () => void) => void;
  queuedHttp: () => Record<string, unknown>;
  globalEditorWatchdogManager: {
    scope: string;
    timeout: number;
    parent: undefined;
    reporter: {
      _onTimeoutHandler: () => Record<string, unknown>;
      _lastReport: undefined;
      _queue: [];
    };
    lastAck: object;
    lastUnackedEdit: object;
  };
  pushEvent: () => Record<string, unknown>;
  reportError: () => Record<string, unknown>;
  showGenericMessageModal: () => Record<string, unknown>;
  showOutOfSyncModal: () => Record<string, unknown>;
  showLockEditorMessageModal: () => Record<string, unknown>;
  toggleReviewPanel: () => Record<string, unknown>;
  validFileRegex: string;
  wsUrl: object;
  project_id: string;
  referencesSearchManager: {
    state: { keys: [] };
    existingIndexHash: Record<string, unknown>;
    inited: boolean;
  };
  loadingManager: { resolveSocketPromise: () => Record<string, unknown> };
  socket: {
    _socket: {
      socket: {
        options: {
          port: number;
          secure: boolean;
          document: {
            location: {
              ancestorOrigins: Record<string, unknown>;
              href: string;
              origin: string;
              protocol: string;
              host: string;
              hostname: string;
              port: string;
              pathname: string;
              search: string;
              hash: string;
              assign: () => Record<string, unknown>;
              reload: () => Record<string, unknown>;
              replace: () => Record<string, unknown>;
              toString: () => Record<string, unknown>;
            };
            jQuery22406981891923722491: {
              events: {
                keypress: [
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  }
                ];
                keydown: [
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  }
                ];
                mouseup: [
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  }
                ];
                visibilitychange: [
                  {
                    type: string;
                    origType: string;
                    data: undefined;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  }
                ];
                click: [
                  {
                    type: string;
                    origType: string;
                    data: undefined;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: undefined;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  }
                ];
                keyup: [
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  }
                ];
                contextmenu: [
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  },
                  {
                    type: string;
                    origType: string;
                    data: object;
                    handler: () => Record<string, unknown>;
                    guid: number;
                    selector: undefined;
                    needsContext: undefined;
                    namespace: string;
                  }
                ];
              };
              handle: () => Record<string, unknown>;
            };
            __reactEvents$ctn8he3zo9a: Record<string, unknown>;
          };
          resource: string;
          transports: [string, string, string, string, string];
          'connect timeout': number;
          'try multiple transports': boolean;
          reconnect: boolean;
          'reconnection delay': number;
          'reconnection limit': number;
          'reopen delay': number;
          'max reconnection attempts': number;
          'sync disconnect on unload': boolean;
          'auto connect': boolean;
          'flash policy port': number;
          manualFlush: boolean;
          host: string;
          query: string;
          'force new connection': boolean;
        };
        connected: boolean;
        open: boolean;
        connecting: boolean;
        reconnecting: boolean;
        namespaces: Record<string, unknown>;
        buffer: [];
        doBuffer: boolean;
        sessionid: string;
        closeTimeout: number;
        heartbeatTimeout: number;
        origTransports: [string, string, string, string, string];
        heartbeatTimeoutTimer: number;
        transport: {
          sessid: string;
          websocket: Record<string, unknown>;
          isOpen: boolean;
          closeTimeout: number;
        };
        connectTimeoutTimer: number;
      };
      name: string;
      flags: Record<string, unknown>;
      json: { name: string };
      ackPackets: number;
      acks: Record<string, unknown>;
    };
    publicId: string;
  };
  connectionManager: {
    wsUrl: object;
    userIsLeavingPage: boolean;
    connected: boolean;
    userIsInactive: boolean;
    gracefullyReconnecting: boolean;
    shuttingDown: boolean;
    joinProjectRetryInterval: number;
    lastUserAction: string;
  };
  fileTreeManager: FileTreeManager;
  editorManager: {
    editorOpenDocEpoch: number;
    localStorage: () => Record<string, unknown>;
  };
  onlineUsersManager: { cursorUpdateInterval: number };
  historyManager: Record<string, unknown>;
  pdfManager: Record<string, unknown>;
  permissionsManager: Record<string, unknown>;
  binaryFilesManager: Record<string, unknown>;
  metadataManager: {
    metadata: {
      state: {
        documents: {
          [key: string]: {
            labels: [];
            packages: {
              inputenc: [
                {
                  caption: string;
                  snippet: string;
                  meta: string;
                  score: number;
                }
              ];
            };
          };
        };
      };
      onBroadcastDocMeta: () => Record<string, unknown>;
      onEntityDeleted: () => Record<string, unknown>;
      onFileUploadComplete: () => Record<string, unknown>;
      getAllLabels: () => Record<string, unknown>;
      getAllPackages: () => Record<string, unknown>;
      loadProjectMetaFromServer: () => Record<string, unknown>;
      loadDocMetaFromServer: () => Record<string, unknown>;
      scheduleLoadDocMetaFromServer: () => Record<string, unknown>;
    };
  };
  outlineManager: {
    isTexFile: boolean;
    flatOutline: [{ line: number; title: string; level: number }];
    outline: [null];
    highlightedLine: object;
    ignoreNextScroll: boolean;
    ignoreNextCursorUpdate: boolean;
  };
  localStorage: () => Record<string, unknown>;
  browserIsSafari: boolean;
  featureToggle: undefined;
  compileGroup: string;
};

export default State;
