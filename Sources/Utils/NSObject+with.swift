
import Foundation

extension NSObjectProtocol {
  @discardableResult func with(_ modifier: (Self) -> ()) -> Self {
    modifier(self)
    return self
  }
}
