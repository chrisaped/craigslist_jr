get '/' do
	@categories = Category.order
  erb :index
end

get '/new_category' do
	erb :new_category, layout: false
end

post '/new_category' do
	Category.create(params[:category])
  @categories = Category.all
  erb :category_list
end

get '/:name' do
	@category = Category.find_by_name(params[:name])
	@posts = @category.posts
	erb :category
end

get '/:name/new_post' do
	@category = Category.find_by_name(params[:name])
	erb :new_post, layout: false
end

post '/:name/new_post' do
	@category = Category.find_by_name(params[:name])
	@posts = @category.posts
	Post.create(title: params[:title], description: params[:description], category_id: @category.id)
	erb :post_list
end

get '/:name/:id' do
	@post = Post.find(params[:id])
	@category = Category.find_by_name(params[:name])
	erb :post
end

get '/:name/:id/edit' do
	@post = Post.find(params[:id])
	erb :edit_post
end

post '/:name/:id/edit' do
	@post = Post.find(params[:id])
	@post.update_attributes(title: params[:title], description: params[:description])
	erb :post
end