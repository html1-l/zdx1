const quizQuestions = {
    "网络安全基础知识": [
        {
            question: "什么是防火墙？",
            options: [
                "一种网络安全设备，用于监控和控制网络流量",
                "一种杀毒软件",
                "一种加密工具",
                "一种网络测速工具"
            ],
            correct: 0
        },
        {
            question: "以下哪个不是常见的网络攻击类型？",
            options: [
                "DDoS攻击",
                "SQL注入",
                "网络钓鱼",
                "网络加速"
            ],
            correct: 3
        },
        {
            question: "什么是社会工程学攻击？",
            options: [
                "利用计算机漏洞的攻击",
                "利用人的心理弱点进行的欺骗",
                "利用网络设备漏洞的攻击",
                "利用操作系统漏洞的攻击"
            ],
            correct: 1
        },
        {
            question: "以下哪个是最基本的网络安全防护措施？",
            options: [
                "安装杀毒软件",
                "使用复杂密码",
                "定期备份数据",
                "以上都是"
            ],
            correct: 3
        },
        {
            question: "什么是漏洞扫描？",
            options: [
                "扫描网络中的病毒",
                "扫描系统和应用程序中的安全漏洞",
                "扫描网络连接速度",
                "扫描硬件故障"
            ],
            correct: 1
        }
    ],
    "密码学基础": [
        {
            question: "对称加密与非对称加密的主要区别是什么？",
            options: [
                "加密速度",
                "密钥的使用方式",
                "加密强度",
                "应用场景"
            ],
            correct: 1
        },
        {
            question: "以下哪个是常见的对称加密算法？",
            options: [
                "RSA",
                "AES",
                "ECC",
                "DSA"
            ],
            correct: 1
        },
        {
            question: "数字签名的主要作用是什么？",
            options: [
                "加密数据",
                "验证身份和确保数��完整性",
                "提高传输速度",
                "压缩数据"
            ],
            correct: 1
        },
        {
            question: "什么是哈希函数？",
            options: [
                "一种加密算法",
                "一种压缩算法",
                "一种单向函数，将任意长度的输入转换为固定长度的输出",
                "一种解密算法"
            ],
            correct: 2
        },
        {
            question: "SSL/TLS协议主要用于？",
            options: [
                "数据压缩",
                "网络加速",
                "安全通信",
                "文件传输"
            ],
            correct: 2
        }
    ],
    "网络攻击与防御": [
        {
            question: "什么是XSS攻击？",
            options: [
                "跨站脚本攻击",
                "SQL注入攻击",
                "拒绝服务攻击",
                "病毒攻击"
            ],
            correct: 0
        },
        {
            question: "CSRF攻击的防御措施不包括？",
            options: [
                "使用Token",
                "验证Referer",
                "增加验证码",
                "增加网络带宽"
            ],
            correct: 3
        },
        {
            question: "以下哪个不是DDoS攻击的特征？",
            options: [
                "大量请求",
                "分布式源IP",
                "数据加密",
                "资源耗尽"
            ],
            correct: 2
        },
        {
            question: "什么是缓冲区溢出攻击？",
            options: [
                "向程序输入缓冲区写入超过其容量的数据",
                "耗尽系统内存",
                "修改系统时间",
                "删除系统文件"
            ],
            correct: 0
        },
        {
            question: "以下哪个是入侵检测系统（IDS）的功能？",
            options: [
                "杀毒",
                "监控和分析网络流量",
                "加密数据",
                "提升网速"
            ],
            correct: 1
        }
    ],
    "信息系统安全": [
        {
            question: "什么是访问控制？",
            options: [
                "限制系统资源的使用",
                "控制网络速度",
                "控制系统温度",
                "管理系统日志"
            ],
            correct: 0
        },
        {
            question: "以下哪个不是身份认证的因素？",
            options: [
                "你知道的（密码）",
                "你拥有的（令牌）",
                "你的特征（生物识别）",
                "你的位置（IP地址）"
            ],
            correct: 3
        },
        {
            question: "什么是最小权限原则？",
            options: [
                "给予用户最少的访问权限",
                "使用最简单的密码",
                "安装最少的软件",
                "使用最少的存储空间"
            ],
            correct: 0
        },
        {
            question: "以下哪个不是常见的备份策略？",
            options: [
                "完全备份",
                "增量备份",
                "差异备份",
                "实时备份"
            ],
            correct: 3
        },
        {
            question: "什么是审计日志？",
            options: [
                "系统错误记录",
                "用户活动记录",
                "网络流量记录",
                "以上都是"
            ],
            correct: 3
        }
    ],
    "Web安全测试": [
        {
            question: "什么是SQL注入？",
            options: [
                "向数据库插入恶意SQL代码",
                "数据库备份操作",
                "数据库优化操作",
                "数据库加密操作"
            ],
            correct: 0
        },
        {
            question: "Web应用防火墙（WAF）的主要功能是什么？",
            options: [
                "加速网页加载",
                "压缩网页内容",
                "保护Web应用免受攻击",
                "管理网站内容"
            ],
            correct: 2
        },
        {
            question: "什么是会话劫持？",
            options: [
                "窃取用户会话标识",
                "修改网页内容",
                "删除网站文件",
                "修改服务器配置"
            ],
            correct: 0
        },
        {
            question: "以下哪个不是安全的密码存储方式？",
            options: [
                "明文存储",
                "使用盐值加密",
                "使用哈希函数",
                "使用加密算法"
            ],
            correct: 0
        },
        {
            question: "什么是HTTPS？",
            options: [
                "一种网页设计标准",
                "一种安全的HTTP协议",
                "一种编程语言",
                "一种数据库"
            ],
            correct: 1
        }
    ],
    "安全协议分析": [
        {
            question: "IPSec协议的主要功能是什么？",
            options: [
                "网络层安全",
                "应用层安全",
                "传输层安全",
                "数据链路层安全"
            ],
            correct: 0
        },
        {
            question: "什么是Kerberos？",
            options: [
                "一种加密算法",
                "一种认证协议",
                "一种防火墙",
                "一种操作系统"
            ],
            correct: 1
        },
        {
            question: "SSH协议主要用于？",
            options: [
                "安全远程登录",
                "网页浏览",
                "文件共享",
                "视频传输"
            ],
            correct: 0
        },
        {
            question: "以下哪个不是TLS协议的功能？",
            options: [
                "数据加密",
                "身份认证",
                "完整性检查",
                "数据压缩"
            ],
            correct: 3
        },
        {
            question: "VPN的主要作用是什么？",
            options: [
                "提供虚拟专用网络",
                "提供网络加速",
                "提供存储服务",
                "提供邮件服务"
            ],
            correct: 0
        }
    ],
    "恶意代码分析": [
        {
            question: "什么是病毒？",
            options: [
                "能自我复制的恶意程序",
                "网络故障",
                "系统错误",
                "硬件问题"
            ],
            correct: 0
        },
        {
            question: "特洛伊木马的特点是什么？",
            options: [
                "自我复制",
                "伪装成正常程序",
                "感染文件",
                "加密文件"
            ],
            correct: 1
        },
        {
            question: "什么是勒索软件？",
            options: [
                "加密用户文件并要求赎金的恶意程序",
                "窃取用户密码的程序",
                "删除系统文件的程序",
                "监控用户行为的程序"
            ],
            correct: 0
        },
        {
            question: "以下哪个不是恶意代码分析方法？",
            options: [
                "静态分析",
                "动态分析",
                "行为分析",
                "性能分析"
            ],
            correct: 3
        },
        {
            question: "什么是沙箱？",
            options: [
                "一种游戏",
                "一种隔离环境",
                "一种编程语言",
                "一种数据库"
            ],
            correct: 1
        }
    ],
    "安全加固技术": [
        {
            question: "系统加固的主要目的是什么？",
            options: [
                "提高系统性能",
                "增强系统安全性",
                "扩展系统功能",
                "优化用户界面"
            ],
            correct: 1
        },
        {
            question: "以下哪个不是加固操作系统的方法？",
            options: [
                "关闭不必要的服务",
                "安装安全补丁",
                "配置访问控制",
                "增加系统内存"
            ],
            correct: 3
        },
        {
            question: "什么是基线配置？",
            options: [
                "系统的标准安全配置",
                "系统的性能配置",
                "系统的网络配置",
                "系统的显示配置"
            ],
            correct: 0
        },
        {
            question: "以下哪个是重要的密码策略？",
            options: [
                "定期更改密码",
                "使用简单密码",
                "与他人共享密码",
                "在多处使用相同密码"
            ],
            correct: 0
        },
        {
            question: "什么是漏洞修补？",
            options: [
                "修复系统漏洞",
                "修复硬件故障",
                "修复显示问题",
                "修复网络连接"
            ],
            correct: 0
        }
    ],
    "应急响应处理": [
        {
            question: "什么是安全事件响应？",
            options: [
                "处理安全事件的过程",
                "系统维护",
                "网络监控",
                "数据备份"
            ],
            correct: 0
        },
        {
            question: "以下哪个不是应急响应的阶段？",
            options: [
                "准备",
                "检测与分析",
                "遏制与根除",
                "系统升级"
            ],
            correct: 3
        },
        {
            question: "什么是应急预案？",
            options: [
                "处理安全事件的计划",
                "系统备份计划",
                "网络维护计划",
                "员工培训计划"
            ],
            correct: 0
        },
        {
            question: "事件响应的首要任务是什么？",
            options: [
                "恢复服务",
                "确定范围和影响",
                "惩罚责任人",
                "更新系统"
            ],
            correct: 1
        },
        {
            question: "以下哪个不是有效的证据收集方法？",
            options: [
                "系统日志",
                "网络流量",
                "内存转储",
                "口头描述"
            ],
            correct: 3
        }
    ],
    "安全法规与标准": [
        {
            question: "什么是信息安全等级保护？",
            options: [
                "对信息系统实施安全保护的制度",
                "网络管理制度",
                "软件开发标准",
                "硬件采购标准"
            ],
            correct: 0
        },
        {
            question: "以下哪个不是常见的安全标准？",
            options: [
                "ISO 27001",
                "PCI DSS",
                "GDPR",
                "HTML5"
            ],
            correct: 3
        },
        {
            question: "什么是合规性？",
            options: [
                "符合法律法规和标准的要求",
                "系统性能达标",
                "网络速度达标",
                "存储容量达标"
            ],
            correct: 0
        },
        {
            question: "数据保护的基本原则不包括？",
            options: [
                "保密性",
                "完整性",
                "可用性",
                "可复制性"
            ],
            correct: 3
        },
        {
            question: "安全审计的目的是什么？",
            options: [
                "评估安全控制的有效性",
                "提高系统性能",
                "扩展系统功能",
                "培训用户"
            ],
            correct: 0
        }
    ]
};

// 从题库中随机抽取指定数量的题目
function getRandomQuestions(category, count) {
    const questions = quizQuestions[category];
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
} 