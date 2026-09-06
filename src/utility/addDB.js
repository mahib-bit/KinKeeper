import { toast } from "react-toastify";

const getStoredTimeline = () => {
    const storedLogsSTR = localStorage.getItem("kin_timeline");
    if (storedLogsSTR) {
        try {
            return JSON.parse(storedLogsSTR);
        } catch {
            return [];
        }
    }
    return [];
};

const addToTimeline = (kinId, type) => {
    const logs = getStoredTimeline();
    
    const newLog = {
        id: Date.now(),
        kinId: Number(kinId),
        type: type, 
        date: new Date().toISOString()
    };

    const updatedLogs = [newLog, ...logs];
    localStorage.setItem("kin_timeline", JSON.stringify(updatedLogs));
    toast.success(`Logged ${type} interaction!`);
};

export { getStoredTimeline, addToTimeline };