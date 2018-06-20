package com.art.of.concurrency.chapter2;

/**
 * @author ss53742
 *
 * pi = [0-1] 4/(1+x^2) dx
 */
public class ValueOfPI {
	
	static final long num_rects = 100000;

	public static void main(String... args) {
		int i;
		double mid, height, width, sum = 0.0;
		double area;
		
		width = 1.0/(double) num_rects;
		for(i = 0;i<num_rects;i++) {
			mid = (i+0.5) * width;
			height = 4.0/(1.0 + mid*mid);
			sum +=height;
		}
		area = width*sum;
		System.out.println("Computed pi: " + area);
	}
}
