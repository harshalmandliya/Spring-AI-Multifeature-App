package com.project.ai;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.image.ImageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class GenAiController {
 @Autowired
	ChatService chatService;
 @Autowired
 ImageService imageService;
 @Autowired
 RecipeService recipeService;
	@GetMapping("ask-ai")
	public String getResponse(@RequestParam String prompt) {
		return chatService.getResponse(prompt);
	}
	@GetMapping("ask-ai-options")
	public String getResponseOptions(@RequestParam String prompt) {
		return chatService.getResponseOptions(prompt);
	}
	@GetMapping("generate-image")
	public List<String> generateImage(HttpServletResponse response,@RequestParam String prompt,
			@RequestParam(defaultValue = "hd") String quality,
			@RequestParam(defaultValue = "1") int n,
			@RequestParam(defaultValue = "1024") int width,
			@RequestParam(defaultValue = "1024") int height
			) throws IOException {
		ImageResponse imageResponse=imageService.generateImage(prompt,quality,n,width,height);
		List<String> imageUrls=imageResponse.getResults().stream()
		.map(result->result.getOutput().getUrl())
		.collect(Collectors.toList());
		return imageUrls;
	}
	@GetMapping("recipe-creator")
	public String getResponseOptions(@RequestParam String ingredients,@RequestParam(defaultValue = "any") String cuisine,@RequestParam(defaultValue = "") String dietaryRestrictions) {
		return recipeService.createRecipe(ingredients, cuisine, dietaryRestrictions);
	}
	
}
