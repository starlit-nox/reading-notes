# Why Its Important:



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

