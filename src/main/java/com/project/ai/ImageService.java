package com.project.ai;

import org.springframework.ai.image.ImagePrompt;
import org.springframework.ai.image.ImageResponse;
import org.springframework.ai.openai.OpenAiImageModel;
import org.springframework.ai.openai.OpenAiImageOptions;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class ImageService {
private final OpenAiImageModel openAiImageModel;
public ImageService(OpenAiImageModel openAiImageModel) {
	this.openAiImageModel=openAiImageModel;
}
public ImageResponse generateImage(String prompt,String quality,int n,int width,int height){
	ImageResponse imageResponse=openAiImageModel.call(new ImagePrompt(prompt,
			OpenAiImageOptions.builder()
			.model("dall-e-2")
            .quality(quality)
            .N(n)
            .height(height)
            .width(width).build())
			);
	return imageResponse;
}
}
