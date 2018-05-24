import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

import org.apache.commons.io.IOUtils;

public class ReUsableRequestWrapper extends HttpServletRequestWrapper {
	private byte[] rawData;
	private HttpServletRequest request;
	private ServletInputStreamWrapper servletStream;
	
	private static final String ENCODING = "utf-8";

	public RequestWrapper(HttpServletRequest request) {
		super(request);
		this.request = request;
		this.servletStream = new ServletInputStreamWrapper();
	}

	public void resetInputStream() {
		servletStream.stream = new ByteArrayInputStream(rawData);
	}

	@Override
	public ServletInputStream getInputStream() throws IOException {
		if (rawData == null) {
			rawData = IOUtils.toByteArray(this.request.getReader(), ENCODING);
			servletStream.stream = new ByteArrayInputStream(rawData);
		}
		return servletStream;
	}

	@Override
	public BufferedReader getReader() throws IOException {
		if (rawData == null) {
			rawData = IOUtils.toByteArray(this.request.getReader(), ENCODING);
			servletStream.stream = new ByteArrayInputStream(rawData);
		}
		return new BufferedReader(new InputStreamReader(servletStream));
	}

	private class ServletInputStreamWrapper extends ServletInputStream {

		private InputStream stream;

		@Override
		public int read() throws IOException {
			return stream.read();
		}
	}
	
	public String getBody() {
		String body;
		try {
			body = IOUtils.toString(this.getInputStream(), ENCODING);
			this.resetInputStream();
		} catch (IOException e) {
			return null;
		}
		return body;
	}
}
