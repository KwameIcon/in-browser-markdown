import { useState, useEffect } from "react";
import Editor from "./components/editor/Editor";
import Preview from "./components/preview/preview";
import IconDocument from './assets/icon-document.svg';
import IconDarkMode from './assets/icon-dark-mode.svg';
import IconLightMode from './assets/icon-light-mode.svg';
import IconMenu from './assets/icon-menu.svg';
import IconClose from './assets/icon-close.svg';
import DeleteIcon from './assets/icon-delete.svg';
import SaveIcon from './assets/icon-save.svg';
import { StyledApp } from "./styles/app.styled";
import Toast from "./components/toast/Toast";

interface Document {
  name: string;
  content: string;
  createdAt: string;
}

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [backgroundColorMode, setBackgroundColorMode] = useState<'light' | 'dark'>('light');
  const [markdown, setMarkdown] = useState('');
  const [fileName, setFileName] = useState('undefined document');
  const [isEdit, setIsEdit] = useState(false);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [fullPreview, setFullPreview] = useState(false);

  useEffect(() => {
    const savedDocuments = JSON.parse(localStorage.getItem('documents') || '[]');
    setDocuments(savedDocuments);
  }, []);

  const handleSaveDocument = () => {
    const newDocument: Document = {
      name: fileName,
      content: markdown,
      createdAt: new Date().toLocaleString()
    };
    const existingDocumentIndex = documents.findIndex(doc => doc.name === fileName);

    if (existingDocumentIndex !== -1) {
      const confirmReplace = window.confirm('Document already exists. Do you want to replace it?');
      if (!confirmReplace) return;

      const updatedDocuments = [...documents];
      updatedDocuments[existingDocumentIndex] = newDocument;
      setDocuments(updatedDocuments);
      localStorage.setItem('documents', JSON.stringify(updatedDocuments));
    } else {
      const updatedDocuments = [...documents, newDocument];
      setDocuments(updatedDocuments);
      localStorage.setItem('documents', JSON.stringify(updatedDocuments));
    }

    alert('Document saved successfully!');
    setFileName('undefined document');
    setMarkdown('');
  };

  const handleLoadDocument = (name: string) => {
    const documentToLoad = documents.find(doc => doc.name === name);
    if (documentToLoad) {
      setFileName(documentToLoad.name);
      setMarkdown(documentToLoad.content);
    }
  };

  const handleCreateDocument = () => {
    setFileName('New Document');
    setMarkdown('');
  };

  const handleDeleteDocument = () => {
    if (!selectedDocument) return;

    const updatedDocuments = documents.filter(doc => doc.name !== selectedDocument.name);
    setDocuments(updatedDocuments);
    localStorage.setItem('documents', JSON.stringify(updatedDocuments));
    setSelectedDocument(null); // Reset selected document after deletion
  };

  const handleChangeName = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEdit(false);
    }
  };

  const openDeleteConfirmation = (name: string) => {
    const documentToDelete = documents.find(doc => doc.name === name);
    if (documentToDelete) {
      setSelectedDocument(documentToDelete);
    }

    setMarkdown('');
  };

  const closeDeleteConfirmation = () => {
    setSelectedDocument(null);
  };

  return (
    <StyledApp>
      {/* Left sidebar */}
      <div className={`left-sidebar ${isSidebarActive ? 'active' : ''}`}>
        <h1>My Documents</h1>
        <button className="create-document" onClick={handleCreateDocument}>+ New Document</button>
        <div className="created-documents">
          {documents.map(doc => (
            <div key={doc.name} className="document" onClick={() => handleLoadDocument(doc.name)}>
              <div className="icon">
                <img src={IconDocument} alt="Document Icon" />
              </div>
              <div className="info">
                <div className="date">
                  <p>{doc.createdAt}</p>
                </div>
                <div className="name">{doc.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="theme" onClick={() => setBackgroundColorMode(curr => (curr === 'light' ? 'dark' : 'light'))}>
          <img src={IconDarkMode} alt="Dark Mode Icon" className="moon" />
          <div className={`toggle-button ${backgroundColorMode === 'dark' ? 'dark' : ''}`}></div>
          <img src={IconLightMode} alt="Light Mode Icon" className="sun" />
        </div>
      </div>

      {/* Top sidebar */}
      <div className={`top-sidebar ${isSidebarActive ? 'moveLeft' : ''}`}>
        <div className="left">
          <div className="toggle-menu-icons-container" onClick={() => setIsSidebarActive(prev => !prev)}>
            {isSidebarActive ? <img src={IconClose} alt="Close Icon" /> : <img src={IconMenu} alt="Menu Icon" />}
          </div>
          <div className="markdown">
            <h1>MARKDOWN</h1>
          </div>
          <div className="vertical-bar" />
          <div className="document-title">
            <img src={IconDocument} alt="Document Icon" />
            <div className="info">
              <div className="placeholder">document name</div>
              <div className="name">
                {!isEdit ? (
                  <p onClick={() => setIsEdit(true)}>{fileName}</p>
                ) : (
                  <input
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    onKeyDown={handleChangeName}
                    className="setFileName"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Delete and save buttons */}
        <div className="actions">
          <div className="delete" onClick={() => openDeleteConfirmation(fileName)}>
            <img src={DeleteIcon} alt="Delete Icon" />
          </div>
          <div className="save" onClick={handleSaveDocument}>
            <img src={SaveIcon} alt="Save Icon" />
            <p>Save Document</p>
          </div>
        </div>
      </div>

      {/* Markdown editor */}
      <section className={`markedown-editor ${isSidebarActive ? 'moveLeft' : ''}`} id={backgroundColorMode}>
        <Editor fullPreview = {fullPreview} markdown={markdown} setMarkdown={setMarkdown} backgroundColorMode={backgroundColorMode} />
        <Preview fullPreview = {fullPreview} setFullPreview = {setFullPreview} markdown={markdown} backgroundColorMode={backgroundColorMode} />
      </section>

      {/* Toast for delete confirmation */}
      {selectedDocument && (
        <Toast
          backgroundColorMode={backgroundColorMode}
          documentName={selectedDocument.name}
          onCancel={closeDeleteConfirmation}
          onDelete={handleDeleteDocument} // Pass handleDeleteDocument as onDelete
        />
      )}

    </StyledApp>
  );
}

export default App;
