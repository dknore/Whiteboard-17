# Whiteboard-17: K Nearest Neighbor Algorithm

Directions:<br>
* Write a function that accepts a list of objects, an integer `K`, and another object:

```
{
  x,
  y,
  label
}
```
* Calculate the `K` closest points from the list closest to the another object.
* Return the <u>most common label</u> from those points. 
* The “another” object does not have a label. It’s your job to determine it’s label.

Distance formula:
Math.sqrt( (x1 - x2)^2 + (y1 - y2)^2 )

Note:
* You may use [].sort()
* solid circle is k=3
* dashed circle is k=5

<u>Whiteboard</u>:<br>

![alt text](./images/401.whiteboard-17.png)