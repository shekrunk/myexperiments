package com.sivass.learning.algorithms.sorting;

import com.sivass.learning.algorithms.utils.ArrayUtils;

public class SelectionSort {
	
	//Time Complexity: O(n^2)
	//Auxiliary Space: O(1)
	
	public static void main(String[] args) {
		
		int [] array = new int[] {99, 34, -13, -49, 434};
		SelectionSort ss = new SelectionSort();
		
		ss.sort1(array);
		
		ArrayUtils.print(array);
	}

	@SuppressWarnings("unused")
	private void sort(int[] array) { // udemy.com
		int length = array.length;
		//start from last element till first
		for(int lastUnsortedIndex = length-1;lastUnsortedIndex>0;lastUnsortedIndex--){
			int largestIndex = 0;
			for(int i=1;i<=lastUnsortedIndex;i++) {//find largest elements' index from first element until last elements' index
				if(array[i]>array[largestIndex]) {
					largestIndex = i;
				}
			}

			ArrayUtils.swap(array, largestIndex, lastUnsortedIndex);//swap the element in iteration(lastUnsortedIndex) with the largest Index
		}
	}

	private void sort1(int[] array) {// geeksforgeeks.org
		int length = array.length;
		for(int i=0;i<length-1;i++) {
			int min_idx = i;
			for(int j=i+1;j<length;j++) {
				if(array[j]<array[min_idx]) {
					min_idx = j;
				}
			}
			

			ArrayUtils.swap(array, min_idx, i);//swap the min index with the element in iteration
		}
		
	}

}
