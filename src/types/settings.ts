export type AiTone = "Professional" | "Friendly" | "Technical";
export type WidgetPosition = "bottom-right" | "bottom-left";
export type InterfaceMode = "dark" | "light";

export interface AssistantSettings {
  confidenceThreshold: number;
  sentimentEscalation: boolean;
  keywordTriggers: boolean;
  voiceTone: AiTone;
  brandColor: string;
  interfaceMode: InterfaceMode;
  position: WidgetPosition;
}

export const defaultSettings: AssistantSettings = {
  confidenceThreshold: 75,
  sentimentEscalation: true,
  keywordTriggers: false,
  voiceTone: "Friendly",
  brandColor: "#6366F1",
  interfaceMode: "dark",
  position: "bottom-right",
};
