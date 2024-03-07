const fs = require('fs');
const { exec, execSync } = require('child_process');

/* 
// https://yuledy.helanzuida.com/20201204/15904_c1fcf83a/index.m3u8
// :https://v4.cdtlas.com/20211213/fl6Q2MC2/index.m3u8
https://v4.cdtlas.com/20211213/fl6Q2MC2/1100kb/hls/index.m3u8

https://s.xlzys.com/play/qaQrj1Lb/index.m3u8
*/

// M3U8视频链接
const m3u8Url = 'https://s.xlzys.com/play/qaQrj1Lb/index.m3u8';
// 输出文件路径
const outputFilePath = 'output1.mp4';

// 下载M3U8视频
function downloadM3U8(m3u8Url, outputFilePath) {
    const startTime = Date.now();

    const command = `ffmpeg -i ${m3u8Url} -c copy -bsf:a aac_adtstoasc ${outputFilePath}`;
    const ffmpegProcess = exec(command);

    ffmpegProcess.stderr.on('data', data => {
        // 检测输出，获取下载进度
        const regex = /time=(\d+:\d+:\d+\.\d+)/;
        const match = data.toString().match(regex);
        if (match) {
            const currentTime = parseTime(match[1]);
            const totalTime = parseTime(getTotalDuration());
            const progress = (currentTime / totalTime) * 100;
            const elapsedTime = (Date.now() - startTime) / 1000; // 毫秒转换为秒

            console.log(`Download progress: ${progress.toFixed(2)}%`);
            console.log(`Elapsed time: ${elapsedTime.toFixed(2)} seconds`);
        }
    });

    ffmpegProcess.stdout.on('close', () => {
        console.log('Download completed!');
    });
}

// 将时间字符串转换为秒数
function parseTime(timeStr) {
    const timeParts = timeStr.split(':');
    const hours = parseInt(timeParts[0], 10) || 0;
    const minutes = parseInt(timeParts[1], 10) || 0;
    const seconds = parseFloat(timeParts[2]) || 0;

    return hours * 3600 + minutes * 60 + seconds;
}

// 获取视频总时长
function getTotalDuration() {
    const command = `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 ${m3u8Url}`;
    const result = execSync(command);
    console.log(result);
    return parseFloat(result.toString().trim());
}

// 开始下载
downloadM3U8(m3u8Url, outputFilePath);
