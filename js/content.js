/* ============================================================
   TESTOFY — Content File
   Edit this file to add your chapters and content blocks.
   ============================================================

   BLOCK TYPES:
   ─────────────────────────────────────────────────────────
   { type: 'text',      content: '<p>...</p>' }
   { type: 'title',     content: 'Section title' }
   { type: 'callout',   content: '<strong>Label:</strong> text', variant: '' | 'red' }
   { type: 'tip',       icon: '💡', label: 'Tip', content: '...' }
   { type: 'quote',     text: '...', author: '...' }
   { type: 'checklist', title: '...', id: 'unique-id', items: ['item1','item2'] }
   { type: 'list',      title: '...', items: ['item1','item2'] }
   { type: 'divider' }
   ─────────────────────────────────────────────────────────
*/

const BOOK = {
  title:    'Testofy',
  subtitle: 'Your complete guide',
  chapters: [

    // ── CHAPTER 1 ──────────────────────────────────────────
    {
      title: 'Chapter 1 Title',
      description: 'A brief description of what this chapter covers.',
      blocks: [
        {
          type: 'text',
          content: `<p>Your content goes here. This is a sample paragraph to show how text blocks look inside the app.</p>`
        },
        {
          type: 'callout',
          content: '<strong>Key point:</strong> This is a highlighted callout block. Use it for important notes.'
        },
        {
          type: 'checklist',
          title: 'Action Checklist',
          id: 'ch1-list1',
          items: [
            'First action item',
            'Second action item',
            'Third action item',
          ]
        }
      ]
    },

    // ── CHAPTER 2 ──────────────────────────────────────────
    {
      title: 'Chapter 2 Title',
      description: 'A brief description of what this chapter covers.',
      blocks: [
        {
          type: 'text',
          content: `<p>Add your chapter 2 content here.</p>`
        },
        {
          type: 'tip',
          icon: '💡',
          label: 'Pro Tip',
          content: 'This is a tip block. Use it to highlight advice or shortcuts.'
        },
        {
          type: 'checklist',
          title: 'Action Checklist',
          id: 'ch2-list1',
          items: [
            'First action item',
            'Second action item',
          ]
        }
      ]
    },

  ]
};
