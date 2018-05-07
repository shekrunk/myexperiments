package com.sivass.learning.algorithms.sorting;

import com.sivass.learning.algorithms.utils.ArrayUtils;

public class BubbleSort {
	//TimeComplexity: O(n^2)
	//SpaceComplexity: 
	public static void main(String[] args) {
		BubbleSort bs = new BubbleSort();
		int[] array = new int [] {1,34, 53, -13, -534, 300, 90, 73};
		bs.sort(array);
		
		ArrayUtils.print(array);
	}

	private void sort(int[] array) { //basic-way
		for(int i=0;i<array.length;i++) {//geeks4geeks - i<array.length-1
			for(int j=i+1;j<array.length;j++) {//geeks4geeks - j<array.length-i-1
				if(array[i]>array[j]) {	//geeks4geeks - array[j] > array[j+1]
					ArrayUtils.swap(array, i, j);
				}
			}
		}
	}
	
	private void sort1(int[] array) {//udemy.com
		for(int lastUnsortedIndex = array.length-1;lastUnsortedIndex>0;lastUnsortedIndex--) {
			for(int i=0;i<lastUnsortedIndex;i++) {
				if(array[i]>array[i+1]){
					ArrayUtils.swap(array, i, i+1);
				}
			}
		}
	}
}
