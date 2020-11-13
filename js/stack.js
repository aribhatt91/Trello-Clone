class Stack {
	_stack = []
	constructor(els){
		_stack.concat(els);
	}
	push(el){
		this._stack.push(el);
	}
	pop(){
		return this._stack.pop();
	}
	peek(){
		return this._stack.length > 1 ? this._stack[this._stack.length - 1] : null;
	}
	isEmpty(){
		return !this._stack || this._stack.length === 0;
	}
}