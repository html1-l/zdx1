function viewPPT(pdfPath) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'modal ppt-modal';
    modal.style.display = 'flex';
    
    // 创建PDF查看器容器
    const container = document.createElement('div');
    container.className = 'ppt-viewer-container';
    
    // 创建关闭按钮
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-ppt-btn';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = () => modal.remove();
    
    // 创建PDF嵌入元素
    const pdfViewer = document.createElement('embed');
    pdfViewer.src = pdfPath;
    pdfViewer.type = 'application/pdf';
    pdfViewer.style.width = '100%';
    pdfViewer.style.height = '100%';
    
    // 组装模态框
    container.appendChild(closeBtn);
    container.appendChild(pdfViewer);
    modal.appendChild(container);
    document.body.appendChild(modal);
} 