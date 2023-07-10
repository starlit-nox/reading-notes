# Why Its Important:

This information is important because it allows applications to read and write data from storage mediums like disks, memory, networks, and pipes. Knowing this information is essential for tasks like management and data processing. Knowing this information will help us effectively maintain and keep information secure.

## File & Stream I/O

<https://learn.microsoft.com/en-us/dotnet/standard/io/>

- File and stream I/O in .NET involves reading from and writing to data streams and files.

- The .NET Framework provides a robust set of classes for performing file and stream input/output (I/O) operations.

- The System.IO namespace provides types for working with files and directories, including classes like File, FileInfo, Directory, DirectoryInfo, and Path.

- **Streams** are sequences of bytes that can be used to read from and write to different storage mediums.

Storage Medium Examples: 

```
disks, memory, networks, and pipes
```

**Commonly used stream classes:** 
- FileStream
- IsolatedStorageFileStream
- MemoryStream, BufferedStream
- NetworkStream
- PipeStream
- CryptoStream 

- The System.IO namespace provides reader and writer classes for reading and writing encoded characters to streams

Examples: 

``` BinaryReader, BinaryWriter, StreamReader, StreamWriter, StringReader, StringWriter, TextReader, and TextWriter ```

- Asynchronous I/O operations should be used when working with large amounts of data to keep the application responsive. Asynchronous methods have names ending with "Async" and are used with the async and await keywords.

- The System.IO.Compression namespace contains classes for compressing and decompressing files and streams.

``` ZipArchive, ZipArchiveEntry, ZipFile, ZipFileExtensions, DeflateStream, and GZipStream ```

- Isolated storage is a mechanism for storing application data in a secure and isolated manner. It is useful when the application doesn't have access to user files.

- I/O operations in Windows Store apps have some differences, such as using types in the Windows.Storage namespace for file operations and using asynchronous methods to prevent blocking the UI thread.

- When using I/O classes, follow operating system security requirements.

## Write to a File

<https://learn.microsoft.com/en-us/dotnet/standard/io/how-to-write-text-to-a-file>


- StreamWriter and File classes are commonly used to write text to a file in .NET.

- StreamWriter allows synchronous writing of text to a file using methods like Write, WriteLine, WriteAsync, and WriteLineAsync.

- File class provides static methods like WriteAllLines, WriteAllText, AppendAllLines, AppendAllText, and AppendText for writing and appending text to a file.

- The Path class is used to work with file and directory paths, providing methods like Combine, Join, and TryJoin.

## Read to a File

<https://learn.microsoft.com/en-us/dotnet/standard/io/how-to-read-and-write-to-a-newly-created-data-file>

# Analogy

Compare files as books in a library and streams as reading and writing. You can perform actions on files like creating, copying, and deleting, just like handling books in a library. Streams are like the process of reading and writing data.

Different types of streams are like different reading or writing methods. There are streams for reading and writing files, sending data over the internet, or working with data in memory.

To read or write text, you can use special tools like translators. They convert text into a format computers understand or vice versa.

Compression is like shrinking a book to save space, and decompression is expanding it back. Compression tools reduce file sizes, while decompression tools bring them back to their original size.

Isolated storage is like having your own personal locker at school. It provides a safe place for an application to store its data, separate from others.