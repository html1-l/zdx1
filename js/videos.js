document.addEventListener('DOMContentLoaded', function() {
    const videoList = [
        {
            chapter: "第一章：网络安全概述",
            videos: [
                {
                    title: "1.1 网络安全基础",
                    src: "./videos/第一章.mp4"
                }
            ]
        },
        {
            chapter: "第二章：黑客原理与防范措施",
            videos: [
                {
                    title: "2.1 黑客攻击原理",
                    src: "./videos/第二章1.mp4"
                },
                {
                    title: "2.2 防范措施",
                    src: "./videos/第二章2.mp4"
                },
                {
                    title: "2.3 安全防护",
                    src: "./videos/第二章3.mp4"
                }
            ]
        },
        {
            chapter: "第三章：网络病毒防治",
            videos: [
                {
                    title: "3.1 病毒分析与防护",
                    src: "./videos/第三章.mp4"
                }
            ]
        },
        {
            chapter: "第四章：密码技术",
            videos: [
                {
                    title: "4.1 密码技术基础",
                    src: "./videos/第四章.mp4"
                }
            ]
        },
        {
            chapter: "第五章：防火墙技术",
            videos: [
                {
                    title: "5.1 防火墙原理与应用",
                    src: "./videos/第五章.mp4"
                }
            ]
        },
        {
            chapter: "第六章：Windows的安全与保护机制",
            videos: [
                {
                    title: "6.1 Windows安全机制",
                    src: "./videos/第六章.mp4"
                }
            ]
        },
        {
            chapter: "第七章：Web应用安全",
            videos: [
                {
                    title: "7.1 Web安全基础",
                    src: "./videos/第七章.mp4"
                }
            ]
        }
    ];

    const videoGrid = document.querySelector('.video-grid');
    
    // 添加加载状态提示
    const loadingMessage = document.createElement('div');
    loadingMessage.className = 'loading-message';
    loadingMessage.textContent = '正在加载视频...';
    videoGrid.appendChild(loadingMessage);

    // 清除加载消息
    videoGrid.removeChild(loadingMessage);

    // 创建视频元素
    videoList.forEach(chapter => {
        // 添加章节标题
        const chapterTitle = document.createElement('h2');
        chapterTitle.className = 'chapter-title';
        chapterTitle.textContent = chapter.chapter;
        videoGrid.appendChild(chapterTitle);

        // 只有当章节有视频时才显示视频
        if (chapter.videos.length > 0) {
            // 添加该章节的所有视频
            chapter.videos.forEach(video => {
                const videoItem = document.createElement('div');
                videoItem.className = 'video-item';
                videoItem.innerHTML = `
                    <h3>${video.title}</h3>
                    <div class="video-container">
                        <video controls width="100%" preload="metadata" onerror="handleVideoError(event)">
                            <source src="${video.src}" type="video/mp4">
                            您的浏览器不支持视频播放。
                        </video>
                    </div>
                `;
                videoGrid.appendChild(videoItem);
            });
        } else {
            // 如果章节没有视频，显示提示信息
            const noVideoMessage = document.createElement('div');
            noVideoMessage.className = 'no-video-message';
            noVideoMessage.textContent = '本章节暂无视频';
            videoGrid.appendChild(noVideoMessage);
        }
    });
}); 