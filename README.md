# Divide and Conquer Sum
In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`.

Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.
The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.
To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.
Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”-Andrew Thomas


## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file. 
$T(1)=1$, $T(n)=3T(\frac{n}{3})$

$T(\frac{n}{3})=3T(\frac{n}{\frac{3}{3}})=3T(\frac{n}{3^2})$

Plugging in $ T(\frac{n}{3})$ we then have:

$= 3.(3T(\frac{n}{3^2}))$


$=3^2.T(\frac{n}{3^2})$

$T(\frac{n}{3^2})=3T(\frac{n}{\frac{3^2}{3}})=3T(\frac{n}{3^3})$

$=3^2.(3.T(\frac{n}{3^3}))$

$=3^3.T(\frac{n}{3^3})$

Observing the pattern of change as we itterate we then obtain the following recurance relation:

$=3^iT(\frac{n}{3^i}), $, where $i \in \mathbb{N}\setminus{\{0}\}$

Now we need to find when the recurance relation is equal to the base case, in this insatnce it's T(1)=1.

$\frac{i}{3}=1 \implies i=log_3(n)$

Plugging this back in we have:

$=3^{log_3(n)}T(\frac{n}{3^{(log_3(n))}})$

Then because $T(\frac{n}{3^{(log_3(n))}})$ matches our base case it equals , thus we now have:

$=3^{log_3(n)}$

$=n \implies n \in \theta(n)$


## Sources

no.1-https://www.youtube.com/watch?v=4VqmGXwpLqc- This is a youtube video on how merge sort worked and it showed some code for an outline on how you might implement a divide and merge structure, I took inspiration for building my divide code based off this

no.2- Worked with Ivan Martian on some psudo code for the base case
