import { StyledPreview } from '../../styles/Preview.styled';
import DOMPurify from 'dompurify';
import MarkdownIt from 'markdown-it';
import highlightjs from 'markdown-it-highlightjs';
import 'highlight.js/styles/default.css'; // Ensure you import highlight.js styles
import eye from '../../assets/icon-show-preview.svg'

// Initialize markdown-it with highlightjs plugin
const md = new MarkdownIt().use(highlightjs);

interface PreviewProps {
  markdown: string;
  backgroundColorMode: 'light' | 'dark';
  fullPreview: boolean;
  setFullPreview: React.Dispatch<React.SetStateAction<boolean>>;
}

function Preview({ markdown, backgroundColorMode, fullPreview, setFullPreview }: PreviewProps) {
    // Render markdown to HTML
    const html = md.render(markdown);

    // Sanitize the HTML output
    const PurifiedElement = DOMPurify.sanitize(html);

    return (
        <StyledPreview className={`${backgroundColorMode === 'light' ? 'light' : 'dark'} ${fullPreview ? 'expandPreview' : ''}`}>
            <div>
                <h1>Preview</h1>
                <img src= {eye} alt="" onClick={() => setFullPreview(prev => !prev)}/>
            </div> 
            <section>
                <div className="output" dangerouslySetInnerHTML={{ __html: PurifiedElement }} />
            </section>
        </StyledPreview>
    );
}


export default Preview;
