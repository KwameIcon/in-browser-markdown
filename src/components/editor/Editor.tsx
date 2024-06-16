import { StyledEditor } from '../../styles/editor.styled';

interface EditorProps {
  markdown: string;
  setMarkdown: (markdown: string) => void;
  backgroundColorMode: 'light' | 'dark';
  fullPreview: boolean;
}

const Editor: React.FC<EditorProps> = ({ markdown, setMarkdown, backgroundColorMode, fullPreview }) => {


  return (
    <StyledEditor className= {fullPreview ? 'hideEditor' : ''}>
      <div id= {backgroundColorMode}>
        <h1>Markdown</h1>
      </div>
      <section id= {backgroundColorMode}>
        <textarea 
          name="markdown" 
          id={backgroundColorMode} 
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)} 
        />
      </section>
    </StyledEditor>
  );
};

export default Editor;
