// Default markdown text
const defaultMarkdown = `
# Welcome to my Markdown Previewer!

## This is a sub-heading...

### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '```' && lastLine == '```') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**!  
Or _italic_.  
Or... **_both!_**  
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and  
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. But the list goes on...

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

// Populate the editor with default markdown
const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

editor.value = defaultMarkdown;

// Update preview on input
editor.addEventListener("input", () => {
  preview.innerHTML = marked(editor.value, { breaks: true });
});

// Render initial content
preview.innerHTML = marked(defaultMarkdown, { breaks: true });
