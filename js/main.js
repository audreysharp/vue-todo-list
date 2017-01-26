// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',
  data: {
    titleInput: '',
    contentInput: '',
    editingItem: false,
    todos: [ 
      {
        title: 'test',
        content: 'test2'
      },
      {
        title: 'test2',
        content: 'test3'
      }
    ]
  },
  methods: {
    addTodo: function() {
      this.todos.push({
        title: this.titleInput,
        content: this.contentInput
      })
      this.titleInput = '';
      this.contentInput = '';
      this.editingItem = false;
    },
    removeTodo: function(index) {
      if (index > -1) {
        this.todos.splice(index, 1);
      }
    },
    isEditing: function() {
      this.editingItem = true;
    },
    cancel: function() {
      this.titleInput = '';
      this.contentInput = '';
      this.editingItem = false;
    }

  }
});