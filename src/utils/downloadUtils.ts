/**
 * Utility functions for handling file downloads
 */

/**
 * Downloads a file from the public folder with error handling and fallback
 * @param fileName - Name of the file in the public folder
 * @param downloadName - Name to use for the downloaded file (optional)
 * @returns Promise that resolves when download is initiated
 */
export const downloadPublicFile = async (
  fileName: string,
  downloadName?: string
): Promise<void> => {
  try {
    // Construct the URL for files in the public folder
    const fileUrl = `/${fileName}`;
    
    // Check if the file exists before attempting download
    const response = await fetch(fileUrl, { method: 'HEAD' });
    if (!response.ok) {
      throw new Error(`File not found: ${fileName}`);
    }
    
    // Create and trigger download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = downloadName || fileName;
    link.target = '_blank'; // Fallback to open in new tab if download fails
    
    // Temporarily add to DOM, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log(`Download initiated for: ${fileName}`);
  } catch (error) {
    console.error('Error downloading file:', error);
    
    // Fallback: open the file in a new tab
    const fallbackUrl = `/${fileName}`;
    window.open(fallbackUrl, '_blank');
    console.log(`Fallback: Opening ${fileName} in new tab`);
  }
};

/**
 * Downloads the resume PDF file
 * This is a convenience function for the specific resume download
 */
export const downloadResume = (): Promise<void> => {
  return downloadPublicFile(
    'GowthamRJenarthananResume.pdf',
    'Gowtham_RJenarthanan_Resume.pdf'
  );
};

/**
 * Checks if a file exists in the public folder
 * @param fileName - Name of the file to check
 * @returns Promise that resolves to true if file exists, false otherwise
 */
export const checkFileExists = async (fileName: string): Promise<boolean> => {
  try {
    const response = await fetch(`/${fileName}`, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Error checking file existence:', error);
    return false;
  }
};
