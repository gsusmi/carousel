class ImageList
  def self.all
    location = File.join(Rails.root, 'app', 'assets', 'images')
    self.new(location).list
  end

  def initialize(location)
    @location = location
  end

  def list
    file_list = Dir.entries(@location)
    list_images(file_list)
  end

  def list_images(file_list)
    file_list.collect do |filename|
      if filename =~ /(.jpg|.png)/
        filename
      end
    end.compact
  end
end