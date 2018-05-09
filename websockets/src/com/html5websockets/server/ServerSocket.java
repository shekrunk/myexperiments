package com.html5websockets.server;

import java.io.IOException;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/WebSocket")
public class ServerSocket {

	@OnMessage
	public void getMessage(String message, Session session) throws IOException,
			InterruptedException {
		System.out.println("Message Received" + message);
		session.getBasicRemote().sendText("First Message from Server");
		int count = 0;
		while (count < 5) {
			session.getBasicRemote().sendText("Message from Server" + count);
			Thread.sleep(1000);
			count++;
		}
		session.getBasicRemote().sendText("Final Message from Server");
	}

	@OnOpen
	public void OnOpen() {
		System.out.println("Connection Esatblished");

	}

	@OnClose
	public void OnClose() {
		System.out.println("Connection Closed");
	}

}
