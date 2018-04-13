import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collection;
import java.util.Set;
import java.util.TreeSet;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class FileChecker {
	
	private static final String fileNamesInTxt = "";
	private static final String destDir = "";
	
	public static void main(String[] args) {
		Set<String> sdFiles = parseFileListFromText(fileNamesInTxt);
		Set<String> diskFiles = readFileListFromDisk(destDir);
		
		sdFiles.removeAll(diskFiles);
		print(sdFiles);
	}

	private static Set<String> readFileListFromDisk(String filescopieddir2) {
		Set<String> fileNames = new TreeSet<>();
		try (Stream<Path> entries = Files.list(Paths.get(filescopieddir2))){
			
			fileNames = entries.filter(Files::isRegularFile)
			.map(path -> path.getFileName().toString())
			.filter(path->path.toString().endsWith(".mp4"))
			.collect(Collectors.toSet());
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		return fileNames;
	}

	private static Set<String> parseFileListFromText(String filesinsd2) {
		Set<String> fileNames = new TreeSet<>();
		try (Stream<String> lines = Files.lines(Paths.get(filesinsd2))){
			lines.map(line -> line.split("\\s"))
				 .map(arr -> arr[arr.length-1])
				.forEach(e -> fileNames.add(e));
		} catch (IOException e) {
			e.printStackTrace();
		}
		return fileNames;
	}
	
	private static <T> void print(Collection<T> collection){
		System.out.println(collection.size());
		System.out.println("---------------------");
		collection.forEach(System.out::println);
	}

}
