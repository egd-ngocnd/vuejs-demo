## VueJS Demo
Show Demo on [VueJS Demo](https://egd-ngocnd.github.io/vuejs-demo/)
> Project implement Basic Sorting Algorithms


## Get Started
```shell
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve
```
Or use yarn
```shell
yarn install
yarn serve
```
## Features
### Sorting-algorithms
* [x] [Selection Sort](https://www.geeksforgeeks.org/selection-sort/)
* [x] [Bubble Sort](https://www.geeksforgeeks.org/bubble-sort/)
* [ ] [Recursive Bubble Sort](https://www.geeksforgeeks.org/recursive-bubble-sort/)
* [ ] [Insertion Sort](https://www.geeksforgeeks.org/insertion-sort/)
* [ ] [Recursive Insertion Sort](https://www.geeksforgeeks.org/recursive-insertion-sort/)
* [ ] [Merge Sort](https://www.geeksforgeeks.org/merge-sort/)
* [ ] [Iterative Merge Sort](https://www.geeksforgeeks.org/iterative-merge-sort/)
* [ ] [Quick Sort](https://www.geeksforgeeks.org/quick-sort/)
* [ ] [Iterative Quick Sort](https://www.geeksforgeeks.org/iterative-quick-sort/)
* [ ] [Heap Sort](https://www.geeksforgeeks.org/heap-sort/)
* [ ] [Counting Sort](https://www.geeksforgeeks.org/counting-sort/)
* [ ] [Radix Sort](https://www.geeksforgeeks.org/radix-sort/)
* [ ] [Bucket Sort](https://www.geeksforgeeks.org/bucket-sort-2/)
* [ ] [ShellSort](https://www.geeksforgeeks.org/shellsort/)
* [ ] [TimSort](https://www.geeksforgeeks.org/timsort/)
* [ ] [Comb Sort](https://www.geeksforgeeks.org/comb-sort/)
* [ ] [Pigeonhole Sort](https://www.geeksforgeeks.org/pigeonhole-sort/)
* [ ] [Cycle Sort](https://www.geeksforgeeks.org/cycle-sort/)
* [ ] [Cocktail Sort](https://www.geeksforgeeks.org/cocktail-sort/)
* [ ] [Strand Sort](https://www.geeksforgeeks.org/strand-sort/)
* [ ] [Bitonic Sort](https://www.geeksforgeeks.org/bitonic-sort/)
* [ ] [Pancake sorting](https://www.geeksforgeeks.org/pancake-sorting/)
* [ ] [Binary Insertion Sort](https://www.geeksforgeeks.org/binary-insertion-sort/)
* [ ] [BogoSort or Permutation Sort](https://www.geeksforgeeks.org/bogosort-permutation-sort/)
* [ ] [Gnome Sort](https://www.geeksforgeeks.org/gnome-sort-a-stupid-one/)
* [ ] [Sleep Sort – The King of Laziness / Sorting while Sleeping](https://www.geeksforgeeks.org/sleep-sort-king-laziness-sorting-sleeping/)
* [ ] [Structure Sorting (By Multiple Rules) in C++](https://www.geeksforgeeks.org/structure-sorting-in-c/)
* [ ] [Stooge Sort](https://www.geeksforgeeks.org/stooge-sort/)
* [ ] [Tag Sort (To get both sorted and original)](https://www.geeksforgeeks.org/tag-sort/)
* [ ] [Tree Sort](https://www.geeksforgeeks.org/tree-sort/)
* [ ] [Cartesian Tree Sorting](https://www.geeksforgeeks.org/cartesian-tree-sorting/)
* [ ] [Odd-Even Sort / Brick Sort](https://www.geeksforgeeks.org/odd-even-sort-brick-sort/)
* [ ] [QuickSort on Singly Linked List](https://www.geeksforgeeks.org/quicksort-on-singly-linked-list/)
* [ ] [QuickSort on Doubly Linked List](https://www.geeksforgeeks.org/quicksort-for-linked-list/)
* [ ] [3-Way QuickSort (Dutch National Flag)](https://www.geeksforgeeks.org/3-way-quicksort-dutch-national-flag/)
* [ ] [Merge Sort for Linked Lists](https://www.geeksforgeeks.org/merge-sort-for-linked-list/)
* [ ] [Merge Sort for Doubly Linked List](https://www.geeksforgeeks.org/merge-sort-for-doubly-linked-list/)
* [ ] [3-way Merge Sort](https://www.geeksforgeeks.org/3-way-merge-sort/)
### Searching Algorithms
* [ ] [Linear Search](https://www.geeksforgeeks.org/linear-search/)
* [ ] [Binary Search](https://www.geeksforgeeks.org/binary-search/)
* [ ] [Jump Search](https://www.geeksforgeeks.org/jump-search/)
* [ ] [Interpolation Search](https://www.geeksforgeeks.org/interpolation-search/)
* [ ] [Exponential Search](https://www.geeksforgeeks.org/exponential-search/)
* [ ] [Sublist Search (Search a linked list in another list)](https://www.geeksforgeeks.org/sublist-search-search-a-linked-list-in-another-list/)
* [ ] [Fibonacci Search](https://www.geeksforgeeks.org/fibonacci-search/)
* [ ] [The Ubiquitous Binary Search](https://www.geeksforgeeks.org/the-ubiquitous-binary-search-set-1/)
* [ ] [Recursive program to linearly search an element in a given array](https://www.geeksforgeeks.org/recursive-c-program-linearly-search-element-given-array/)
* [ ] [Recursive function to do substring search](https://www.geeksforgeeks.org/recursive-function-to-do-substring-search/)
* [ ] [Unbounded Binary Search Example (Find the point where a monotonically increasing function becomes positive first time)](https://www.geeksforgeeks.org/find-the-point-where-a-function-becomes-negative/)
## Deloy github pages
```
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```
## Clone code
```javascript
$(".algo").find("li").each(function(){
    console.log("* [ ] [" + $(this).text() + "](" + $(this).find("a").attr("href") + ")")
});
```
