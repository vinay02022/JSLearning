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
var findSumOfOddElements = function (head) {

    //only real code is here 
    let sum = 0;
    let current = head;

    while (current !== null) {
        if (current.val % 2 !== 0) {
            sum += current.val;
        }
        current = current.next;
    }

    return sum;
    // return the sum of odd values of the linkedlist
};

// Don't change anything below. If changed click on reset.
function ListNode(val, next) {
    return {
        val: val,
        next: next == undefined ? null : next,
    };
}

async function readInput() {
    let inputString = '';

    // Using 'end' event to read the complete input
    process.stdin.on('end', () => {
        const inputArr = inputString.split(/(?:\r\n|\r|\n)/g);
        var linklistvalues = inputArr[0].split('->');
        var head = ListNode(parseInt(linklistvalues[0]));
        var temp = head;
        
        for (var i = 1; i < linklistvalues.length; i++) {
            var new_node = ListNode(parseInt(linklistvalues[i]));
            temp.next = new_node;
            temp = new_node;
        }
        
        var output = findSumOfOddElements(head);
        
        if (output !== null) {
            console.log(output);
        } else {
            console.log(-1);
        }
    });

    // Accumulate input using the 'data' event
    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
    });

    process.stdin.resume();
}

readInput();
