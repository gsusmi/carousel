class RootController < ApplicationController
  def index
    @images = ImageList.all
  end
end
