// frontend/src/components/TodoPlanner.jsx
// Squarespace style Interactive Task Planner
import React, { useState } from 'react';
import { Plus, Check, Trash2, Calendar, Tag } from 'lucide-react';

export default function TodoPlanner({ onNotify }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Draft Editorial Strategy for Q3', category: 'Publishing', completed: false, priority: 'High' },
    { id: 2, title: 'Review MongoDB Schema Relationships', category: 'Backend', completed: true, priority: 'Medium' },
    { id: 3, title: 'Refine Burgundy & Gold Styling Component', category: 'Design', completed: false, priority: 'Low' }
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState('Publishing');

  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      category: newTaskCategory,
      completed: false,
      priority: 'Medium'
    };

    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
    onNotify('Task added to planner!');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
    onNotify('Task deleted.');
  };

  return (
    <section id="planner" className="py-20 bg-white border-t border-silk-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Planner & Workflow</h2>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy">Editorial Task Planner</h3>
        </div>

        {/* Add Task Input Form */}
        <form onSubmit={addTask} className="silk-card p-4 rounded-2xl mb-8 flex flex-col sm:flex-row gap-3">
          <input 
            type="text" 
            placeholder="What needs to be done?" 
            value={newTaskTitle} 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-silk-border focus:ring-2 focus:ring-burgundy outline-none"
          />
          <select 
            value={newTaskCategory}
            onChange={(e) => setNewTaskCategory(e.target.value)}
            className="px-4 py-3 rounded-xl border border-silk-border focus:ring-2 focus:ring-burgundy outline-none bg-white"
          >
            <option value="Publishing">Publishing</option>
            <option value="Backend">Backend</option>
            <option value="Design">Design</option>
          </select>
          <button 
            type="submit"
            className="bg-burgundy text-white px-6 py-3 rounded-xl hover:bg-burgundy-dark transition-colors flex items-center justify-center space-x-2 font-medium"
          >
            <Plus className="w-5 h-5 text-gold" />
            <span>Add</span>
          </button>
        </form>

        {/* Task List */}
        <div className="space-y-3">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className={`p-4 rounded-xl border transition-all flex items-center justify-between ${
                task.completed ? 'bg-gray-50 border-gray-200 opacity-60' : 'bg-silk border-silk-border hover:shadow-md'
              }`}
            >
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => toggleTask(task.id)}
                  className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                    task.completed ? 'bg-burgundy border-burgundy text-gold' : 'border-gray-400 hover:border-burgundy'
                  }`}
                >
                  {task.completed && <Check className="w-4 h-4" />}
                </button>
                <span className={`text-sm font-medium ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                  {task.title}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-burgundy/10 text-burgundy">
                  {task.category}
                </span>
                <button 
                  onClick={() => deleteTask(task.id)} 
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}