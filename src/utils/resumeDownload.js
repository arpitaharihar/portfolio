import { RESUME_B64 } from "../data/resumeBase64";

/**
 * Converts a base64 string into a Blob for downloading.
 */
export function b64toBlob(b64Data, contentType = "application/pdf") {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];
  const sliceSize = 512;

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
}

/**
 * Downloads the resume PDF using either the local static file or the embedded base64 blob.
 */
export function triggerResumeDownload(filename = "Arpita_Harihar_Resume.pdf") {
  try {
    // Priority: Create Blob from embedded base64 data to guarantee it works in all environments
    if (RESUME_B64 && RESUME_B64.length > 100) {
      const blob = b64toBlob(RESUME_B64, "application/pdf");
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
      return true;
    }
  } catch (err) {
    console.warn("Base64 blob download fallback:", err);
  }

  // Fallback to static public file path
  const link = document.createElement("a");
  link.href = `/${filename}`;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  return true;
}
