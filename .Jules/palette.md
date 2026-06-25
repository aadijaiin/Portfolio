## 2024-06-24 - Missing ARIA labels and focus states on icon-only buttons
**Learning:** Icon-only interactive elements (like social links and music player controls) lack `aria-label`s and `focus-visible` states, making them inaccessible to screen readers and difficult to use for keyboard navigators. Adding these makes a huge difference in standardizing accessibility without altering the visual design.
**Action:** Always add `aria-label` and `focus-visible` styles to icon-only buttons and links.
