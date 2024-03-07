function qinqiu(index) {
    fetch('https://askchat.ai:1112/chatstream', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imgfiles: [],
            iskaiqishangxiawen: true,
            model: "32",
            nowrole: "2",
            shangxiawenchangdu: 5,
            text: `
            
            TypeError: fetch failed
    at Object.fetch (node:internal/deps/undici/undici:11730:11)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at runNextTicks (node:internal/process/task_queues:64:3)
    at process.processImmediate (node:internal/timers:447:9)
    TypeError: fetch failed
    at Object.fetch (node:internal/deps/undici/undici:11730:11)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at runNextTicks (node:internal/process/task_queues:64:3)
    at process.processImmediate (node:internal/timers:447:9)TypeError: fetch failed
    at Object.fetch (node:internal/deps/undici/undici:11730:11)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at runNextTicks (node:internal/process/task_queues:64:3)
    at process.processImmediate (node:internal/timers:447:9)TypeError: fetch failed
    at Object.fetch (node:internal/deps/undici/undici:11730:11)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at runNextTicks (node:internal/process/task_queues:64:3)
    at process.processImmediate (node:internal/timers:447:9)TypeError: fetch failed
    at Object.fetch (node:internal/deps/undici/undici:11730:11)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at runNextTicks (node:internal/process/task_queues:64:3)
    at process.processImmediate (node:internal/timers:447:9)
            `,
        }),
    }).then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json()
    }).then(data => {
        console.log(index, data);
    }).catch(error => {
        console.error(error.stack); // 输出完整的堆栈跟踪信息
    });
};


for (let index = 0; index < 500; index++) {
    qinqiu(index + 1)
}