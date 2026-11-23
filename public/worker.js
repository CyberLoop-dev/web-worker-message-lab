self.onmessage = (event) => {
  const data = event.data || {};
  if (data.type === "echo") {
    self.postMessage({type:"echo-result", sequence:data.sequence, payload:data.payload, receivedBy:"dedicated-worker"});
  } else if (data.type === "transfer-buffer") {
    const bytes = Array.from(new Uint8Array(data.buffer));
    self.postMessage({type:"buffer-returned", sequence:data.sequence, byteLength:data.buffer.byteLength, bytes, buffer:data.buffer}, [data.buffer]);
  } else if (data.type === "ordered") {
    self.postMessage({type:"ordered-result", sequence:data.sequence, label:data.label});
  }
};
