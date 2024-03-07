const fs = require('fs');
const { exec } = require('child_process');

// M3U8视频链接
const m3u8Url = 'https://s.xlzys.com/play/qaQrj1Lb/index.m3u8';
// 输出文件路径
const outputFilePath = 'output.mp4';

// 下载M3U8视频
function downloadM3U8(m3u8Url, outputFilePath) {
    const command = `ffmpeg -i ${m3u8Url} -c copy -bsf:a aac_adtstoasc ${outputFilePath}`;
    const ffmpegProcess = exec(command);

    ffmpegProcess.stderr.on('data', data => {
        // 检测输出，获取下载进度
        const regex = /time=(\d+:\d+:\d+\.\d+)/;
        const match = data.toString().match(regex);
        if (match) {
            const currentTime = match[1];
            console.log(`Download progress: ${currentTime}`);
        }
    });

    ffmpegProcess.stdout.on('close', () => {
        console.log('Download completed!');
    });
}

// 开始下载
downloadM3U8(m3u8Url, outputFilePath);
