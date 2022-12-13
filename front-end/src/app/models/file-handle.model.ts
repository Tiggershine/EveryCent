import { SafeUrl } from '@angular/platform-browser';

// productImage is in Filehandle list
// productImage!: FileHandle[];

export interface FileHandle {
  file: File;
  url: SafeUrl;
}
