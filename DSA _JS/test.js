'use strict';

process.stdin.setEncoding('utf-8');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var findSumOfOddElements = function(head) {
    
    let sum = 0;
    let current = head;
    
    while (current !== null) {
        if (current.value % 2 !== 0) {
            sum += current.value;
        }
        current = current.next;
    }
    
    return sum;
	// return the sum of odd values of the linkedlist
};
//Dont change anything below. If changed click on reset.
function ListNode(val,next) {
  return {
    val: val,
    next: next==undefined?null:next,
  };
}
async function readInput() {
        let inputString = '';
        var output=[];
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            var linklistvalues = inputArr[0].split('->');
            var head=ListNode(parseInt(linklistvalues[0]));
            var temp =head;
            var count=2;
            for(var i=1;i<linklistvalues.length;i++)
            {
                var new_node = ListNode(parseInt(linklistvalues[i]));
                count=count+1;
                temp.next=new_node;
                temp=new_node;
            }
     var output = findSumOfOddElements(head);
    if(output!=null)
    {
        console.log(output);
    }
    else
    console.log(-1);
            process.exit();
            
        })
        

}
readInput();